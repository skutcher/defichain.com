import { HeroBanner, HeroBannerBg } from "@components/commons/HeroBanner";
import { Head } from "@components/commons/Head";
import { useTranslation } from "../../../hooks/useTranslation";
import { VisualAssetsSection } from "./_components/VisualAssetsSection";

export default function ExploreWallets() {
  const { t } = useTranslation("page-explore-assets");
  // const entries: Array<{ title: string; subtitle: string }> = t(
  //   "footerCards.cards",
  //   { returnObjects: true }
  // );
  return (
    <>
      <Head title={t("heroBanner.subtitle")} />
      <HeroBanner
        title={t("heroBanner.title")}
        subtitle={t("heroBanner.subtitle")}
        desc={t("heroBanner.desc")}
        heroBg={HeroBannerBg.COIN_ARROW}
        hasStartExploringButton
        startExploringJumpLink="#explore-assets-section"
        testID="explore-wallets-defichain-assets"
      />
      <VisualAssetsSection />
    </>
  );
}
