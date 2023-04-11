import Loading from "@/components/loading";
import { useRouter } from "next/router";
import { getAllCostumeTitles, getCostumeByTitle } from "./api/api";

function Product({ costume }) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading/>;
  }

  if(!costume){
    return <p>Costume introuvable</p>
  }

  return (
    <div>
      <h1>{costume.titre}</h1>
      <p>{costume.description}</p>
      <img src={costume.image} alt={costume.titre} />
      <p>{costume.prix} €/jour</p>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const costume = await getCostumeByTitle(params.titre);

  return {
    props: {
      costume,
    },
  };
}

export async function getStaticPaths() {
  const costumes = await getAllCostumeTitles();
  const paths = costumes.map((costume) => ({ params: { titre: costume.titre } }));

  return { paths, fallback: true };
}

export default Product;
