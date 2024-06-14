import type { NextPage } from "next";
import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./search-bar.module.css";

export type SearchBarType = {
  className?: string;
};

const SearchBar: NextPage<SearchBarType> = ({ className = "" }) => {
  const router = useRouter();

  const onSearchBarContainerClick = useCallback(() => {
    router.push("/search");
  }, [router]);

  return (
    <div
      className={[styles.searchBar, className].join(" ")}
      onClick={onSearchBarContainerClick}
    >
      <div className={styles.searchTerm}>
        <img
          className={styles.searchIcon}
          loading="lazy"
          alt=""
          src="/search-1.svg"
        />
      </div>
      <h2 className={styles.searchOrLegal}>Search or Legal matter</h2>
      <div className={styles.searchTerm1}>
        <img
          className={styles.frameIcon}
          loading="lazy"
          alt=""
          src="/frame-2.svg"
        />
      </div>
    </div>
  );
};

export default SearchBar;
