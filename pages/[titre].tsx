import Link from "next/link";
import { useRouter } from "next/router";
import { getCostumeByTitle } from "./api/api";
import { GetStaticPropsContext } from 'next';
import Loading from "@/components/loading";
import Footer from "@/components/footer";

interface Costume {
  titre: string;
  description: string;
  imageUne: string;
  imageDeux: string;
  prix: string;
}

export async function getStaticProps({ params }: GetStaticPropsContext<{ titre: string }>) {
  const costume = await getCostumeByTitle(params.titre);
  console.log(params)
  console.log(costume)
  return { props: { costume } };
  
}

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}

function Product({ costume }: {costume:Costume}) {
  const router = useRouter();
  console.log(costume)

  if (router.isFallback) {
    return <Loading/>;
  }

  if (!costume) {
    return <p>Costume not found</p>;
  }

  return (
    <div>
      <h1>{costume.titre}</h1>
      <p>{costume.description}</p>
      <img src={costume.imageUne} alt={costume.titre} />
      <img src={costume.imageDeux} alt={costume.titre} />
      <p>{costume.prix} €/jour</p>
    </div>
  );
}

export default Product;