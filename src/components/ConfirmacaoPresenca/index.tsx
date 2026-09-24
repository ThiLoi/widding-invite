import React, { useState, SubmitEvent, ChangeEvent } from "react";
import Styles from "./Styles.module.css";

const API_URL =
  "https://script.google.com/macros/s/AKfycbzo-wUyQ0_Ic3t2252xVzClvjjG3vJvFUOx2jcTAhCs5nSm1zhAc3AUjV9MzGZxs9EQ4Q/exec";

// Interfaces para os tipos de resposta da API
interface ApiResponseBusca {
  encontrado: boolean;
  confirmado: boolean;
  nome: string;
}

interface ApiResponseConfirmacao {
  sucesso: boolean;
}

export function ConfirmacaoPresenca(): React.JSX.Element {
  const [nomeInput, setNomeInput] = useState<string>("");
  const [nomeValidado, setNomeValidado] = useState<string>("");
  const [mensagem, setMensagem] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [podeConfirmar, setPodeConfirmar] = useState<boolean>(false);
  const [confirmadoSucesso, setConfirmadoSucesso] = useState<boolean>(false);

  // 1. Buscar o nome na planilha
  const handleVerificar = async (e: React.SubmitEvent): Promise<void> => {
    e.preventDefault();
    if (!nomeInput.trim()) {
      setMensagem("Por favor, digite seu nome.");
      return;
    }

    setLoading(true);
    setMensagem("Buscando na lista...");
    setPodeConfirmar(false);
    setConfirmadoSucesso(false);

    try {
      const response = await fetch(
        `${API_URL}?action=buscar&nome=${encodeURIComponent(nomeInput.trim())}`,
        {
          method: "GET",
          redirect: "follow", // <-- Garante que o redirecionamento do Google seja seguido
        },
      );

      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }

      const data: ApiResponseBusca = await response.json();

      if (!data.encontrado) {
        setMensagem(
          "Nome não encontrado na lista. Por favor, verifique a grafia.",
        );
      } else if (data.confirmado) {
        setMensagem(
          `Olá, ${data.nome}! Sua presença já foi confirmada anteriormente.`,
        );
      } else {
        setNomeValidado(data.nome);
        setMensagem(
          `Olá, ${data.nome}! Clique no botão abaixo para confirmar sua presença.`,
        );
        setPodeConfirmar(true);
      }
    } catch (error) {
      console.error("Erro na verificação:", error);
      setMensagem("Erro ao consultar a lista. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  // 2. Confirmar presença na planilha
  const handleConfirmar = async (): Promise<void> => {
    setLoading(true);
    setMensagem("Confirmando...");
    setPodeConfirmar(false);

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify({ nome: nomeValidado }),
      });

      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }

      const data: ApiResponseConfirmacao = await response.json();

      if (data.sucesso) {
        setMensagem("🎉 Presença confirmada com sucesso! Esperamos por você!");
        setConfirmadoSucesso(true);
        setNomeInput("");
      } else {
        setMensagem("Erro ao confirmar. Tente novamente.");
        setPodeConfirmar(true);
      }
    } catch (error) {
      console.error("Erro ao confirmar:", error);
      setMensagem("Erro de conexão ao enviar confirmação.");
      setPodeConfirmar(true);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setNomeInput(e.target.value);
  };

  return (
    <div className={Styles.confirmacaoContainer}>
      <h2>Confirmação de Presença</h2>

      <div className={Styles.bordarConfirmacao}>
        <form onSubmit={handleVerificar} className={Styles.confirmacaoForm}>
          <p>
            <b>*Nome do convite:</b> (Ex.: Tia Ana e Família)
          </p>
          <input
            className={Styles.confirmacaoInput}
            type="text"
            placeholder="Digite seu nome completo"
            value={nomeInput}
            onChange={handleInputChange}
            disabled={loading || confirmadoSucesso}
          />

          {!podeConfirmar && !confirmadoSucesso && (
            <button
              className={Styles.btnVerificar}
              type="submit"
              disabled={loading}
            >
              {loading ? "Verificando..." : "Verificar Nome"}
            </button>
          )}
        </form>

        {mensagem && <p className={Styles.mensagemStatus}>{mensagem}</p>}

        {podeConfirmar && (
          <button
            className={Styles.btnConfirmar}
            onClick={handleConfirmar}
            disabled={loading}
          >
            {loading ? "Confirmando..." : "Confirmar Minha Presença"}
          </button>
        )}
      </div>
    </div>
  );
}
