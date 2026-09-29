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

// URL da API configurável por ambiente (Vite). Em produção, define
// VITE_API_URL no .env do frontend (ex: https://api.o-teu-site.com).
const API_URL = import.meta.env.VITE_API_URL || "https://backend-casamento-matheus.onrender.com";

const response = await fetch(`${API_URL}/api/processar-pagamento`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ ... }),
});

export function CheckoutModal({ produto, onClose }: CheckoutModalProps) {
  const nomeRef = useRef<HTMLInputElement>(null);
  const mensagemRef = useRef<HTMLTextAreaElement>(null);

  const [loading, setLoading] = useState(false);
  const [pixData, setPixData] = useState<{
    qrCode: string;
    qrCodeBase64: string;
  } | null>(null);

  // O "amount" aqui é só para o Brick desenhar o formulário com o valor
  // certo visualmente. O valor realmente cobrado é sempre calculado no
  // backend a partir do produto.id — o backend nunca confia neste número.
  const initialization = useMemo(() => {
    return { amount: produto.numericPrice };
  }, [produto.numericPrice]);

  const customization = useMemo(() => {
    return {
      paymentMethods: {
        ticket: "all" as const,
        bankTransfer: "all" as const,
        creditCard: "all" as const,
        debitCard: "all" as const,
        mercadoPago: "all" as const,
      },
    };
  }, []);

  const handleSubmit = async ({ formData }: any) => {
    setLoading(true);

    const nomeConvidado = nomeRef.current?.value || "";
    const mensagemNoivos = mensagemRef.current?.value || "";

    try {
      const response = await fetch(`${API_URL}/api/processar-pagamento`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          paymentData: formData,
          produtoId: produto.id,
          nomeConvidado,
          mensagemNoivos,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Erro no pagamento");
      }

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
