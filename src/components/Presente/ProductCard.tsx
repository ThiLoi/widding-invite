import "./ProductCard.css";

/**
 * ProductCard
 *
 * Cartão de produto com imagem, nome, preço e botão de ação (ex: "Presentear").
 *
 * Props:
 * - image: string (URL da imagem do produto)
 * - name: string (nome do produto)
 * - price: string (preço já formatado, ex: "R$ 2.811,99")
 * - buttonLabel: string (texto do botão, padrão "Presentear")
 * - onButtonClick: function (callback ao clicar no botão)
 */
export function ProductCard({
  image = "https://via.placeholder.com/300x300?text=Produto",
  name = "Nome do Produto",
  price = "R$ 0,00",
  buttonLabel = "Presentear",
  onButtonClick = () => {},
}) {
  return (
    <div className="product-card">
      <div className="product-card__image-wrapper">
        <img src={image} alt={name} className="product-card__image" />
      </div>

      <h3 className="product-card__name">{name}</h3>

      <p className="product-card__price">{price}</p>

      <button className="product-card__button" onClick={onButtonClick}>
        {buttonLabel}
      </button>
    </div>
  );
}

/* Exemplo de uso:
<ProductCard
  image="/adega-28-garrafas.png"
  name="Adega 28 Garrafas Termo"
  price="R$ 2.811,99"
  buttonLabel="Presentear"
  onButtonClick={() => console.log("Presentear clicado")}
/>
*/
