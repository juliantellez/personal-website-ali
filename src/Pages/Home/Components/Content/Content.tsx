// tslint:disable:max-line-length

import * as React from "react";
// import {Link} from 'react-router-dom';

// import Logo from '../../../../Components/Icons/Logo';

import * as styles from "./Content.scss";
import Expand from "../../../../Components/Icons/Expand";

// const getWork = (link, img) => (
//     <Link className={styles.contentWorksWork} to={link}>
//         <img className={styles.contentWorksWorkImg} src={img} />
//     </Link>
// );

const projectUrlList: string[] = [
  "/assets/images/projects/santa_murs_webiste.png",
  "/assets/images/projects/amigos.png",
  "/assets/images/projects/birki_website.png",
  "/assets/images/projects/free_will_communitiy_website.png",
  "/assets/images/projects/movie-bucket.png",
  "/assets/images/projects/laviston.png",
  "/assets/images/projects/drills_guru_section.png",
  "/assets/images/projects/latinos_in_london.png",
  "/assets/images/projects/butter_sketch.png",
  "/assets/images/projects/calendar.png",
  "/assets/images/projects/drills_guru_logo.png",
  "/assets/images/projects/analytics_ui.png",
  "/assets/images/projects/drills_guru_website.png",
  "/assets/images/projects/cindy.png",
  "/assets/images/projects/news_app.png",
  "/assets/images/projects/news_app_reminder_1.png",
  "/assets/images/projects/news_app_reminder_2.png",
  "/assets/images/projects/news_app_story.png",
  "/assets/images/projects/article_screen.png",
];

const Content = () => {
  const galleryStyle = {
    // gridTemplateAreas: "item-1 item-2 item-3 item-4"
  };

  return (
    <div className={styles.container}>
      <div style={galleryStyle} className={styles.gallery}>
        {projectUrlList.map((projectUrl) => {
          const style = {
            // gridArea: `item-${key + 1}`,
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
      {/* <section className={styles.contentSection}>
                <Logo />
                <div className={styles.contentSectionText}>
                    Hi I’m Ali, welcome to my online portfolio.
                    <br />
                </div>
            </section>

            <section className={styles.contentSection}>
                <div className={styles.contentWorksTitle}>
                    Beatiful & functional web designs.
                </div>
                <div className={styles.contentWorksBody}>
                    {getWork(
                        '/projects/amigos',
                        '/assets/images/projects/amigos.png'
                    )}
                    {getWork(
                        '/projects/santa-murs-website',
                        '/assets/images/projects/santa_murs_webiste.png'
                    )}
                    {getWork(
                        '/projects/latinos-in-london',
                        '/assets/images/projects/drills_guru_section.png'
                    )}
                    {getWork(
                        '/projects/laviston',
                        '/assets/images/projects/laviston.png'
                    )}
                </div>
            </section>

            <section
                className={`${styles.contentSection} ${styles.contentContact}`}
            >
                <div>Let's Talk,</div>
                <div>I'm always looking for new and exciting projects!</div>
                <Link to="/contact">Contact Me Here</Link>
            </section> */}
    </div>
  );
};

export default Content;
