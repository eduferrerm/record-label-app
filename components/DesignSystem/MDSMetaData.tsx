import MDSText from "@/components/DesignSystem/MDSText";

interface MDSMetaData {
  list: string[];
}

export default function MDSMetaData({ list }: MDSMetaData) {
  const lastItem = list.length - 1;
  return (
    <MDSText styleName={"meta-data-list"}>
      {list.map((genre, idx) => (
        <>
          {genre}
          {idx < lastItem && <span className="text-mds-grey-200">|</span>}
        </>
      ))}
    </MDSText>
  );
}
