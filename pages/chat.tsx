import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./chat.module.css";

const Chat: NextPage = () => {
  const router = useRouter();

  const onCLMTextClick = useCallback(() => {
    router.push("/c-l-m");
  }, [router]);

  const onDraftTextClick = useCallback(() => {
    router.push("/draft");
  }, [router]);

  const onFrameContainerClick = useCallback(() => {
    router.push("/landing-page");
  }, [router]);

  const onFrameIconClick = useCallback(() => {
    router.push("/history1");
  }, [router]);

  return (
    <div className={styles.chat}>
      <header className={styles.frameParent}>
        <div className={styles.groupWrapper}>
          <img
            className={styles.groupIcon}
            loading="lazy"
            alt=""
            src="/group1.svg"
          />
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.documentWrapper}>
            <a className={styles.document}>Document</a>
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
        <div className={styles.searchParent}>
          <img
            className={styles.searchIcon}
            loading="lazy"
            alt=""
            src="/search1.svg"
          />
          <img
            className={styles.frameIcon}
            loading="lazy"
            alt=""
            src="/frame.svg"
            onClick={onFrameIconClick}
          />
          <div className={styles.frameWrapper}>
            <img
              className={styles.frameIcon1}
              alt=""
              src="/frame-1.svg"
              onClick={onFrameContainerClick}
            />
          </div>
        </div>
      </header>
      <div className={styles.chatChild} />
      <section className={styles.chatInner}>
        <div className={styles.frameContainer}>
          <div className={styles.frameDiv}>
            <div className={styles.frameParent1}>
              <img
                className={styles.frameChild}
                loading="lazy"
                alt=""
                src="/frame-23@2x.png"
              />
              <div className={styles.frameWrapper1}>
                <div className={styles.frameParent2}>
                  <div className={styles.frameItem} />
                  <div className={styles.hiHowCan}>
                    Hi, How can i assist you Today?
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper2}>
            <div className={styles.frameParent3}>
              <div className={styles.frameParent4}>
                <div className={styles.frameInner} />
                <div className={styles.whatIsThe}>
                  What is the legal copilot?
                </div>
              </div>
              <div className={styles.frameWrapper3}>
                <div className={styles.frameParent5}>
                  <div className={styles.frameChild1} />
                  <p className={styles.legalCopilotIsContainer}>
                    <span className={styles.legalCopilotIsContainer1}>
                      <span className={styles.legalCopilotIs}>
                        Legal copilot is a virtual legal assistant that uses
                        artificial intelligence (AI) to help lawyers with a
                        variety of tasks:
                      </span>
                      <ul className={styles.analyzingCasesLegalCopilot}>
                        <li className={styles.analyzingCases}>
                          Analyzing cases
                        </li>
                        <li>
                          Legal copilot can analyze cases from different angles,
                          providing insights and strategies that could take
                          hours of manual research. For example, NexLaw's Legal
                          AI Trial Copilot can generate reports that cover
                          aspects of a case like applicable laws, strengths and
                          weaknesses, and trial tactics.
                        </li>
                      </ul>
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.searchBarParent}>
            <div className={styles.searchBar}>
              <div className={styles.searchBar1}>
                <div className={styles.stateLayer}>
                  <div className={styles.leadingIcon}>
                    <div className={styles.container}>
                      <div className={styles.stateLayer1}>
                        <img className={styles.icon} loading="lazy" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className={styles.content}>
                    <div className={styles.searchPlaceholder}>
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
              <div className={styles.rectangleWrapper}>
                <img
                  className={styles.rectangleIcon}
                  alt=""
                  src="/background-shape@2x.png"
                />
              </div>
            </div>
            <div className={styles.frameWrapper4}>
              <img
                className={styles.frameChild2}
                loading="lazy"
                alt=""
                src="/frame-21.svg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Chat;
