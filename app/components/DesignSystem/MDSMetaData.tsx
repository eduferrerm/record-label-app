import MDSText from "@/app/components/DesignSystem/MDSText";

interface MDSMetaData {
  list: string[];
}

export default function MDSMetaData({ list }: MDSMetaData) {
  const lastItem = list.length - 1;
  return (
    <MDSText styleName={"meta-data-list"} semantic="p">
      {list.map((genre, idx) => (
        <span key={genre} className="flex gap-mds-space-1 text-mds-text-2">
          {genre}
          {idx < lastItem && <span className="text-mds-grey-300">|</span>}
        </span>
      ))}
    </MDSText>
  );
}
