import Styles from "./Styles.module.css";
import { useForm } from "react-hook-form";
export function Formulario() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className={Styles.formulario}>
      <h1>CONFIRME SUA PRESENÇA</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={Styles.formGroup}>
          {/* NOME */}
          <div className={Styles.formDiv}>
            <label htmlFor="nome">NOME COMPLETO:</label>
            <input
              id="nome"
              {...register("nome", {
                required: "Digite seu nome.",
                minLength: { value: 3, message: "Digite seu nome completo." },
              })}
              className={`${Styles.caixa} ${errors.nome ? Styles.errors : ""}`}
              type="text"
              placeholder="Digite seu nome"
              aria-invalid={errors.nome ? "true" : "false"}
            />
            {errors.nome && (
              <span className={Styles.mensagemErro}>{errors.nome.message}</span>
            )}
          </div>
          {/* CONFIRMAÇÃO */}
          <div className={Styles.formDiv}>
            <label>VOCÊ IRÁ NO EVENTO?</label>
            <div
              className={`${Styles.checkbox} ${errors.confirmacao ? Styles.radioErro : ""}`}
            >
              <label className={Styles.opcao}>
                <input
                  {...register("confirmacao", {
                    required: "Selecione uma opção.",
                  })}
                  type="radio"
                  value="sim"
                />
                <span>SIM</span>
              </label>
              <label className={Styles.opcao}>
                <input
                  {...register("confirmacao", {
                    required: "Selecione uma opção.",
                  })}
                  type="radio"
                  value="nao"
                />
                <span>NÃO</span>
              </label>
            </div>
            {errors.confirmacao && (
              <span className={Styles.mensagemErro}>
                {errors.confirmacao.message}
              </span>
            )}
          </div>
          {/* E-MAIL */}
          <div className={Styles.formDiv}>
            <label htmlFor="email">
              E-MAIL:
              <p>VOCÊ RECEBERÁ A CONFIRMAÇÃO DE PRESENÇA NESTE E-MAIL</p>
            </label>
            <input
              id="email"
              {...register("email", {
                required: "Digite seu e-mail.",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Digite um e-mail válido.",
                },
              })}
              className={`${Styles.caixa} ${errors.email ? Styles.errors : ""}`}
              type="email"
              placeholder="Digite seu e-mail"
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && (
              <span className={Styles.mensagemErro}>
                {errors.email.message}
              </span>
            )}
          </div>
          {/* TELEFONE */}
          <div className={Styles.formDiv}>
            <label htmlFor="telefone">TELEFONE PARA CONTATO:</label>
            <input
              id="telefone"
              {...register("telefone", {
                required: "Digite seu telefone.",
                pattern: {
                  value: /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/,
                  message: "Digite um telefone válido.",
                },
              })}
              className={`${Styles.caixa} ${errors.telefone ? Styles.errors : ""}`}
              type="tel"
              placeholder="(27) 99999-9999"
              aria-invalid={errors.telefone ? "true" : "false"}
            />
            {errors.telefone && (
              <span className={Styles.mensagemErro}>
                {errors.telefone.message}
              </span>
            )}
          </div>
          {/* OBSERVAÇÕES */}
          <div className={Styles.formDiv}>
            <label htmlFor="observacoes">OBSERVAÇÕES:</label>
            <textarea
              id="observacoes"
              {...register("observacoes", {
                maxLength: { value: 300, message: "Máximo de 300 caracteres." },
              })}
              className={`${Styles.caixa} ${Styles.textarea} ${errors.observacoes ? Styles.errors : ""}`}
              placeholder="Digite alguma observação (opcional)"
            />
            {errors.observacoes && (
              <span className={Styles.mensagemErro}>
                {errors.observacoes.message}
              </span>
            )}
          </div>
          {/* TERMOS */}
          <div
            className={`${Styles.termoPrivado} ${errors.termos ? Styles.termoErro : ""}`}
          >
            <input
              id="termos"
              {...register("termos", {
                required: "Você precisa aceitar os termos.",
              })}
              type="checkbox"
            />
            <label htmlFor="termos">
              Declaro que tive acesso, li e concordo com os
              <a href="#"> Termos de uso e Política de Privacidade</a>
            </label>
          </div>
          {errors.termos && (
            <span className={Styles.mensagemErro}>{errors.termos.message}</span>
          )}
          {/* BOTÃO */}
          <div className={Styles.formDiv}>
            <button type="submit"> Confirmar presença </button>
          </div>
        </div>
      </form>
    </div>
  );
}
