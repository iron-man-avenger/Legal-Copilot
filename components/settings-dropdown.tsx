import type { NextPage } from "next";
import { useCallback } from "react";
import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import { useRouter } from "next/router";
import styles from "./settings-dropdown.module.css";

export type SettingsDropdownType = {
  className?: string;
};

const SettingsDropdown: NextPage<SettingsDropdownType> = ({
  className = "",
}) => {
  const router = useRouter();

  const onSearchSettingsContainerClick = useCallback(() => {
    router.push("/search");
  }, [router]);

  const onXIconClick = useCallback(() => {
    router.push("/landing-page");
  }, [router]);

  const onDocumentLabelsContainerClick = useCallback(() => {
    router.push("/upload-page");
  }, [router]);

  return (
    <div className={[styles.settingsDropdown, className].join(" ")}>
      <div className={styles.settingsOptions}>
        <div
          className={styles.searchSettings}
          onClick={onSearchSettingsContainerClick}
        >
          <h2 className={styles.searchOrLegal}>Search or Legal matter</h2>
          <img className={styles.searchIcon} alt="" src="/search-1.svg" />
        </div>
        <div className={styles.settings}>
          <div className={styles.settingsHeader}>
            <a className={styles.settings1}>Settings</a>
            <img
              className={styles.xIcon}
              loading="lazy"
              alt=""
              src="/x.svg"
              onClick={onXIconClick}
            />
          </div>
          <div className={styles.divider} />
          <div className={styles.themeLanguageOptions}>
            <div className={styles.theme}>Theme</div>
            <FormControl
              className={styles.themeLanguageValues}
              variant="standard"
              sx={{
                borderTopWidth: "0px",
                borderRightWidth: "0px",
                borderBottomWidth: "0px",
                borderLeftWidth: "0px",
                borderRadius: "0px 0px 0px 0px",
                width: "57px",
                height: "21px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "21px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "21px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "21px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "21px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#4b5563",
                  fontSize: 12,
                  fontWeight: "Regular",
                  fontFamily: "Poppins",
                  textAlign: "left",
                  p: "0 !important",
                },
              }}
            >
              <InputLabel color="primary" />
              <Select
                color="primary"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img
                    width="21px"
                    height="21px"
                    src="/chevronright.png"
                    style={{}}
                  />
                )}
              >
                <MenuItem>Light</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
          </div>
          <div className={styles.themeLanguageOptions1}>
            <div className={styles.language}>Language</div>
            <FormControl
              className={styles.parent}
              variant="standard"
              sx={{
                borderTopWidth: "0px",
                borderRightWidth: "0px",
                borderBottomWidth: "0px",
                borderLeftWidth: "0px",
                borderRadius: "0px 0px 0px 0px",
                width: "50px",
                height: "21px",
                m: 0,
                p: 0,
                "& .MuiInputBase-root": {
                  m: 0,
                  p: 0,
                  minHeight: "21px",
                  justifyContent: "center",
                  display: "inline-flex",
                },
                "& .MuiInputLabel-root": {
                  m: 0,
                  p: 0,
                  minHeight: "21px",
                  display: "inline-flex",
                },
                "& .MuiMenuItem-root": {
                  m: 0,
                  p: 0,
                  height: "21px",
                  display: "inline-flex",
                },
                "& .MuiSelect-select": {
                  m: 0,
                  p: 0,
                  height: "21px",
                  alignItems: "center",
                  display: "inline-flex",
                },
                "& .MuiInput-input": { m: 0, p: 0 },
                "& .MuiInputBase-input": {
                  color: "#4b5563",
                  fontSize: 12,
                  fontWeight: "Regular",
                  fontFamily: "Poppins",
                  textAlign: "left",
                  p: "0 !important",
                },
              }}
            >
              <InputLabel color="primary" />
              <Select
                color="primary"
                disableUnderline
                displayEmpty
                IconComponent={() => (
                  <img
                    width="21px"
                    height="21px"
                    src="/chevronright-1.png"
                    style={{}}
                  />
                )}
              >
                <MenuItem>Eng</MenuItem>
              </Select>
              <FormHelperText />
            </FormControl>
          </div>
        </div>
      </div>
      <div className={styles.documentOptionsWrapper}>
        <div className={styles.documentOptions}>
          <div
            className={styles.documentLabels}
            onClick={onDocumentLabelsContainerClick}
          >
            <div className={styles.documentLabelsChild} />
            <h2 className={styles.documentUpload}>Document Upload</h2>
          </div>
          <div className={styles.documentLabels1}>
            <div className={styles.documentLabelsItem} />
            <h2 className={styles.draftALegal}>Draft a Legal Contract</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsDropdown;
