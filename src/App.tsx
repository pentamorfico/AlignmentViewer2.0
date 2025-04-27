import { FastaAlignment } from "./common/FastaAlignment";
import { AlignmentViewer } from "./components/AlignmentViewerHook";

const fastaFileText = ">target\n" +
  "ATGCATGC\n" +
  ">seq1\n" +
  "AAAACCCC\n" +
  ">seq2\n" +
  "ATGCATTT\n" +
  ">seq3\n" +
  "ATGCAAAA\n";

const alignmentObj = FastaAlignment.fromFileContents(
  "ALIGNMENT_NAME", fastaFileText
);

export default function App() {
  return <AlignmentViewer alignment={alignmentObj} />;
}