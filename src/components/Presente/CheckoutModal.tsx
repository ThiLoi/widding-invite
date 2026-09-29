import { useState, useMemo, useRef } from "react";
import { Payment } from "@mercadopago/sdk-react";
import Styles from "./Styles.module.css";

interface Produto {
  id: string;
  image: string;
  name: string;
  price: string;
  numericPrice: number;
}

interface CheckoutModalProps {
  produto: Produto;
  onClose: () => void;
}

// URL da API configurável por ambiente (Vite)
const API_URL =
  import.meta.env.VITE_API_URL ||
  "https://backend-casamento-matheus.onrender.com";

export function CheckoutModal({ produto, onClose }: CheckoutModalProps) {
  const nomeRef = useRef<HTMLInputElement>(null);
  const mensagemRef = useRef<HTMLTextAreaElement>(null);

  const [loading, setLoading] = useState(false);
  const [pixData, setPixData] = useState<{
    qrCode: string;
    qrCodeBase64: string;
  } | null>(null);

  const initialization = useMemo(() => {
    return { amount: produto.numericPrice };
  }, [produto.numericPrice]);

  const customization = useMemo(() => {
    return {
      paymentMethods: {
        ticket: "all" as const,
        bankTransfer: "all" as const, // Permite o Pix
        creditCard: "all" as const, // Permite Cartões de Crédito
        debitCard: "all" as const, // Permite Cartões de Débito
        // A opção 'mercadoPago: "all"' foi removida para evitar a exigência do preferenceId
      },
    };
  }, []);

  const handleSubmit = async ({ formData }: any) => {
    // Validação de segurança antes de enviar para o backend
    if (!produto || !produto.numericPrice || !produto.name) {
      alert("Erro: Dados do presente inválidos.");
      return;
    }

    setLoading(true);

    const nomeConvidado = nomeRef.current?.value || "";
    const mensagemNoivos = mensagemRef.current?.value || "";

    try {
      const response = await fetch(`${API_URL}/api/processar-pagamento`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          paymentData: formData,
          presenteNome: produto.name,
          valor: produto.numericPrice,
          nomeConvidado,
          mensagemNoivos,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Erro no pagamento");
      }

      // Tratamento específico para exibição do QR Code do PIX
      if (data.payment_method_id === "pix") {
        setPixData({
          qrCode: data.point_of_interaction.transaction_data.qr_code,
          qrCodeBase64:
            data.point_of_interaction.transaction_data.qr_code_base64,
        });
      } else if (data.status === "approved") {
        alert("🎉 Obrigado pelo presente! Pagamento aprovado com sucesso.");
        onClose();
      } else {
        alert(
          "Pagamento em processamento. Os noivos serão notificados assim que aprovado!",
        );
        onClose();
      }
    } catch (err) {
      console.error(err);
      alert("Ocorreu um erro ao processar o seu pagamento. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={Styles.modalOverlay}>
      <div className={Styles.modalContent}>
        <button className={Styles.closeButton} onClick={onClose}>
          ✕
        </button>
        <h2>Presentear Noivos 🎁</h2>

        <div className={Styles.produtoPreview}>
          <img src={produto.image} alt={produto.name} />
          <div>
            <h3>{produto.name}</h3>
            <p className={Styles.modalPrice}>{produto.price}</p>
          </div>
        </div>

        {pixData ? (
          <div className={Styles.pixContainer}>
            <h3>Digitalize o QR Code ou copie a chave PIX</h3>
            {pixData.qrCodeBase64 && (
              <img
                src={`data:image/jpeg;base64,${pixData.qrCodeBase64}`}
                alt="QR Code PIX"
                className={Styles.qrCodeImg}
              />
            )}
            <textarea
              readOnly
              value={pixData.qrCode}
              rows={3}
              className={Styles.pixTextArea}
            />
            <button
              className={Styles.copyButton}
              onClick={() => {
                navigator.clipboard.writeText(pixData.qrCode);
                alert("Código PIX copiado!");
              }}
            >
              Copiar Código PIX
            </button>
          </div>
        ) : (
          <>
            <div className={Styles.inputGroup}>
              <label>O seu Nome:</label>
              <input
                type="text"
                placeholder="Ex: Tios João e Maria"
                ref={nomeRef}
              />
            </div>

            <div className={Styles.inputGroup}>
              <label>Mensagem de carinho:</label>
              <textarea
                placeholder="Escreva uma mensagem..."
                rows={3}
                ref={mensagemRef}
              />
            </div>

            {loading ? (
              <p>Processando presente...</p>
            ) : (
              <Payment
                initialization={initialization}
                customization={customization}
                onSubmit={handleSubmit}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}
