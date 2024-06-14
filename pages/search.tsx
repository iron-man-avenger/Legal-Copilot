import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./search.module.css";

const Search: NextPage = () => {
  const router = useRouter();

  const onDocumentTextClick = useCallback(() => {
    router.push("/upload-page");
  }, [router]);

  const onCLMTextClick = useCallback(() => {
    // Please sync "CLM" to the project
  }, []);

  const onDraftTextClick = useCallback(() => {
    router.push("/draft");
  }, [router]);

  const onFrameContainerClick = useCallback(() => {
    router.push("/landing-page");
  }, [router]);

  const onFrameClick = useCallback(() => {
    // Please sync "Chat" to the project
  }, []);

  return (
    <div className={styles.search}>
      <div className={styles.searchChild} />
      <section className={styles.layout}>
        <header className={styles.subLayout}>
          <div className={styles.nestedLayout}>
            <img
              className={styles.groupIcon}
              loading="lazy"
              alt=""
              src="/group1.svg"
            />
          </div>
          <div className={styles.frameParent}>
            <div className={styles.documentWrapper}>
              <a className={styles.document} onClick={onDocumentTextClick}>
                Document
              </a>
            </div>
            <div className={styles.clmWrapper}>
              <a className={styles.clm} onClick={onCLMTextClick}>
                CLM
              </a>
            </div>
            <div className={styles.draftWrapper}>
              <a className={styles.draft} onClick={onDraftTextClick}>
                Draft
              </a>
            </div>
            <div className={styles.homeWrapper} onClick={onFrameContainerClick}>
              <a className={styles.home}>Home</a>
            </div>
          </div>
          <img
            className={styles.subLayoutChild}
            loading="lazy"
            alt=""
            src="/frame-5.svg"
          />
        </header>
        <div className={styles.layoutInner}>
          <div className={styles.frameGroup}>
            <div className={styles.frameChild} onClick={onFrameClick} />
            <div className={styles.frameItem} />
            <div className={styles.frameInner} />
            <div className={styles.frameDiv} />
            <div className={styles.frameChild1} />
          </div>
        </div>
      </section>
      <section className={styles.searchBarLayout}>
        <div className={styles.searchBarContainer}>
          <div className={styles.searchInput}>
            <div className={styles.searchBar}>
              <div className={styles.stateLayer}>
                <div className={styles.leadingIcon}>
                  <div className={styles.container}>
                    <div className={styles.stateLayer1}>
                      <img className={styles.icon} loading="lazy" alt="" />
                    </div>
                  </div>
                </div>
                <div className={styles.content}>
                  <div className={styles.supportingText}>
                    Enter a prompt here
                  </div>
                </div>
                <div className={styles.trailingElements}>
                  <div className={styles.stTrailingIcon}>
                    <div className={styles.container1}>
                      <div className={styles.stateLayer2}>
                        <img
                          className={styles.icon1}
                          alt=""
                          src="/icon-1.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className={styles.ndTrailingIcon}>
                    <div className={styles.container2}>
                      <div className={styles.stateLayer3}>
                        <img
                          className={styles.icon2}
                          alt=""
                          src="/icon-2.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.inputBackground}>
              <img
                className={styles.backgroundShapeIcon}
                alt=""
                src="/background-shape@2x.png"
              />
            </div>
          </div>
          <div className={styles.emptyContainer}>
            <img
              className={styles.emptyContainerChild}
              loading="lazy"
              alt=""
              src="/frame-21.svg"
              onClick={onFrameClick}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Search;
