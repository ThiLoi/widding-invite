import { useState, useEffect } from "react";
import type { ChangeEvent } from "react";
import Styles from "./Styles.module.css";

// Substitua pelo seu URL se ele tiver mudado
const API_URL =
  "https://script.google.com/macros/s/AKfycbyPskDSX8c3n1oVM4e5pF1wl8oA3-8rhvXwunMP6BzycEc7YbsNL_mwk8f_qTzId-b3DQ/exec";

interface Convidado {
  nome: string;
  confirmado: boolean;
}

export function ConfirmacaoPresenca() {
  const [listaConvidados, setListaConvidados] = useState<Convidado[]>([]);
  const [nomeInput, setNomeInput] = useState("");
  const [sugestoes, setSugestoes] = useState<Convidado[]>([]);
  const [convidadoSelecionado, setConvidadoSelecionado] =
    useState<Convidado | null>(null);

  const [mensagem, setMensagem] = useState("");
  const [loadingApp, setLoadingApp] = useState(true);
  const [loadingConfirmacao, setLoadingConfirmacao] = useState(false);
  const [confirmadoSucesso, setConfirmadoSucesso] = useState(false);
  const [mostrarDropdown, setMostrarDropdown] = useState(false);

  // 1. Carrega a lista ao abrir o ecrã
  useEffect(() => {
    const buscarLista = async () => {
      try {
        const response = await fetch(`${API_URL}?action=listar`, {
          method: "GET",
          redirect: "follow",
        });

        const data = await response.json();

        if (data.lista && Array.isArray(data.lista)) {
          setListaConvidados(data.lista);
        } else {
          setMensagem("Erro: A API não devolveu a lista de convidados.");
        }
      } catch (error) {
        console.error("Erro no fetch:", error);
        setMensagem("Erro de ligação ao carregar a lista.");
      } finally {
        setLoadingApp(false);
      }
    };

    buscarLista();
  }, []);

  // 2. Lida com a digitação
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    setNomeInput(valor);
    setConvidadoSelecionado(null);
    setMensagem("");
    setConfirmadoSucesso(false); // Liberta o estado de sucesso ao voltar a escrever

    if (valor.trim().length > 0) {
      const filtrados = listaConvidados.filter((c) =>
        c.nome.toLowerCase().includes(valor.toLowerCase()),
      );
      setSugestoes(filtrados);
      setMostrarDropdown(true);
    } else {
      setSugestoes([]);
      setMostrarDropdown(false);
    }
  };

  // 3. Lida com o clique na sugestão
  const handleSelecionar = (convidado: Convidado) => {
    setNomeInput(convidado.nome);
    setConvidadoSelecionado(convidado);
    setSugestoes([]);
    setMostrarDropdown(false);

    if (convidado.confirmado) {
      setMensagem(
        `Olá, ${convidado.nome}! A sua presença já foi confirmada anteriormente.`,
      );
    } else {
      setMensagem(
        `Olá, ${convidado.nome}! Confirme a sua presença clicando no botão abaixo.`,
      );
    }
  };

  // 4. Confirma a presença
  const handleConfirmar = async () => {
    if (!convidadoSelecionado) return;

    setLoadingConfirmacao(true);
    setMensagem("A processar confirmação...");

    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ nome: convidadoSelecionado.nome }),
      });

      const data = await response.json();

      if (data.sucesso) {
        // Mensagem indicando que pode continuar a confirmar
        setMensagem(
          "🎉 Presença confirmada! Para confirmar mais alguém, basta procurar outro nome.",
        );
        setConfirmadoSucesso(true);
        setNomeInput("");
        setConvidadoSelecionado(null); // Limpa a seleção para libertar a próxima pesquisa

        // Atualiza a lista internamente
        setListaConvidados((prev) =>
          prev.map((c) =>
            c.nome === convidadoSelecionado.nome
              ? { ...c, confirmado: true }
              : c,
          ),
        );
      } else {
        setMensagem("Ocorreu um erro ao confirmar. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro no post:", error);
      setMensagem("Erro de ligação ao enviar. Verifique a sua internet.");
    } finally {
      setLoadingConfirmacao(false);
    }
  };

  return (
    <div className={Styles.confirmacaoContainer}>
      <h2>Confirmação de Presença</h2>

      <div className={Styles.bordarConfirmacao}>
        <div className={Styles.confirmacaoForm}>
          <p>
            <b>*Nome do convite:</b> (Comece a digitar para procurar)
          </p>

          <div className={Styles.inputContainer}>
            <input
              className={Styles.confirmacaoInput}
              type="text"
              placeholder={
                loadingApp ? "A carregar nomes..." : "Digite o seu nome..."
              }
              value={nomeInput}
              onChange={handleInputChange}
              // O input já não fica bloqueado (disabled) quando a confirmação tem sucesso
              disabled={loadingApp || loadingConfirmacao}
              autoComplete="off"
            />

            {mostrarDropdown && sugestoes.length > 0 && (
              <ul className={Styles.sugestoesLista}>
                {sugestoes.map((convidado, index) => (
                  <li
                    key={index}
                    className={Styles.sugestaoItem}
                    onMouseDown={() => handleSelecionar(convidado)}
                  >
                    {convidado.nome}
                  </li>
                ))}
              </ul>
            )}

            {mostrarDropdown &&
              sugestoes.length === 0 &&
              nomeInput.length > 0 && (
                <ul className={Styles.sugestoesLista}>
                  <li className={Styles.sugestaoItemVazia}>
                    Nenhum nome encontrado
                  </li>
                </ul>
              )}
          </div>
        </div>

        {mensagem && <p className={Styles.mensagemStatus}>{mensagem}</p>}

        {convidadoSelecionado &&
          !convidadoSelecionado.confirmado &&
          !confirmadoSucesso && (
            <button
              className={Styles.btnConfirmar}
              onClick={handleConfirmar}
              disabled={loadingConfirmacao}
            >
              {loadingConfirmacao
                ? "A enviar..."
                : "Confirmar A Minha Presença"}
            </button>
          )}
      </div>
    </div>
  );
}
