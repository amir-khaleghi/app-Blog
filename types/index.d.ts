export type FormPostProps = {
  className?: string;
  title: string;
  inputs: Array<{ label: string; placeHolder: string }>;
  select: { options: string[] };
};
