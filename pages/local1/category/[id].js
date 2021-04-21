import { getCategory } from "../../../services/categories/categories";

function Category({ categoryData }) {
  return <>{JSON.stringify(categoryData)}</>;
}

export async function getServerSideProps(context) {
  const tenant = context?.req?.tenant?.name;
  const { id } = context.query;
  const categoryData = await getCategory(id, tenant);

  return {
    props: {
      categoryData: categoryData,
    },
  };
}

export default Category;
