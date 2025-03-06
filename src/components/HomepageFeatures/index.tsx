import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

import Picture1 from "@site/static/img/Picture1.svg";
import Picture2 from "@site/static/img/Picture2.svg";
import Picture3 from "@site/static/img/Picture3.svg";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Precision DXF Editing",
    Svg: Picture1,
    description:
      "Modify DXF files effortlessly with fine-tuned control over entities, layers, and attributes."
  },
  {
    title: "Seamless Automation",
    Svg: Picture2,
    description:
      "Automate DXF generation and modification through an intuitive and efficient API."
  },
  {
    title: "DWG & DXF Compatibility",
    Svg: Picture3,
    description:
      "Supports both DXF and DWG formats, ensuring smooth integration with CAD software."
  }
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
