import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import { useTranslation } from "react-i18next";

const FAQ = () => {
  const { t } = useTranslation();

  const data = {
    title: t("faqTitle"),
    rows: [
      {
        title: t("purchaseSeasonPassesTitle"),
        content: <p>{t("purchaseSeasonPassesContent")}</p>,
      },
      {
        title: t("parkingAvailabilityTitle"),
        content: t("parkingAvailabilityContent"),
      },
      {
        title: t("parkingFeesTitle"),
        content: t("parkingFeesContent"),
      },
      {
        title: t("foodAndDrinksTitle"),
        content: t("foodAndDrinksContent"),
      },
      {
        title: t("petsAllowedTitle"),
        content: <p>{t("petsAllowedContent")}</p>,
      },
      {
        title: t("seatingArrangementsTitle"),
        content: <p>{t("seatingArrangementsContent")}</p>,
      },
      {
        title: t("multipleTeamsTitle"),
        content: <p>{t("multipleTeamsContent")}</p>,
      },
      {
        title: t("seasonPassTransferTitle"),
        content: <p>{t("seasonPassTransferContent")}</p>,
      },
      {
        title: t("gameCancellationTitle"),
        content: <p>{t("gameCancellationContent")}</p>,
      },
      {
        title: t("refundRequestTitle"),
        content: <p>{t("refundRequestContent")}</p>,
      },
      {
        title: t("stayUpdatedTitle"),
        content: <p>{t("stayUpdatedContent")}</p>,
      },
    ],
  };

  const styles = {
    bgColor: "white",
    titleTextColor: "orange",
    rowTitleColor: "black",
    rowContentColor: "dark grey",
    arrowColor: "orange",
  };

  const config = {
    animate: true,
    arrowIcon: "V",
  };

  return (
    <div>
      <Faq data={data} styles={styles} config={config} />
    </div>
  );
};

export default FAQ;
