// tslint:disable:max-line-length

import * as React from "react";

import * as styles from "./Content.scss";
import Expand from "../../../../Components/Icons/Expand";

const projectUrlList: string[] = [
    "/assets/images/projects/birki_website.png",
  "/assets/images/projects/santa_murs_webiste.png",
  "/assets/images/projects/free_will_communitiy_website.png",
  "/assets/images/projects/movie-bucket.png",
  "/assets/images/projects/amigos.png",
  "/assets/images/projects/laviston.png",
  "/assets/images/projects/drills_guru_section.png",
  "/assets/images/projects/cindy.png",
  "/assets/images/projects/drills_guru_website.png",
  "/assets/images/projects/latinos_in_london.png",
  "/assets/images/projects/analytics_ui.png",
  "/assets/images/projects/butter_sketch.png",
];

const Content = () => {
  return (
    <div className={styles.container}>
      <div className={styles.gallery}>
        {projectUrlList.map((projectUrl, key) => {
          const style = {
            gridArea: `item-${key + 1}`,
            backgroundImage: `url(${projectUrl})`,
          };

          return (
            <a
              key={projectUrl}
              href={projectUrl}
              style={style}
              className={styles.galleryAnchor}
            >
              <Expand className={styles.galleryAnchorIcon} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Content;
