import { PageHeader } from "@components/commons/PageHeader";
import { Container } from "@components/commons/Container";
import Link from "next/link";
import { Section } from "@components/commons/Section";
import { Button } from "@components/commons/Buttons";
import { Head } from "@components/commons/Head";
import React from "react";
import { useTranslation } from "../../hooks/useTranslation";
import { Hunter } from "./_components/Hunter";

export default function BugBountyPage(): JSX.Element {
  const { t } = useTranslation("page-bugbounty");
  const submissionList: any[] = t("SubmissionSection.list.entries", {
    returnObjects: true,
  });

  return (
    <>
      <Head title={t("Head.title")} description={t("Head.desc")} />
      <PageHeader title={t("Header.title")}>
        <div className="mt-10 flex flex-wrap">
          <div
            className="w-full text-2xl text-gray-900"
            data-testid="Header.desc.main"
          >
            {t("Header.desc")}
          </div>
          <div className="flex flex-wrap mt-14 items-center">
            <a className="contents" href="#submission">
              <Button text={t("Header.submit")} testID="bug-bounty-btn" />
            </a>
          </div>
        </div>
      </PageHeader>
      <Container>
        <LeaderboardSection />
        <Section title={t("HowToSection.title")} testId="HowToSection">
          <div>
            {/* <Trans
              t={t}
              i18nKey="HowToSection.desc"
              components={[
                <pre key="0" className="inline">
                  defid -testnet
                </pre>,
                <ExternalLink
                  key="1"
                  className="text-primary-500"
                  url="https://github.com/defich/ain"
                />,
              ]}
            /> */}
            <span className="block font-semibold mt-2.5">
              {t("HowToSection.bolded")}
            </span>
          </div>
        </Section>
        <Section
          title={t("SubmissionSection.title")}
          testId="SubmissionSection"
        >
          <div id="submission">
            {/* <Trans
              t={t}
              i18nKey="SubmissionSection.desc"
              components={[
                <ExternalLink
                  key="0"
                  className="text-primary-500"
                  url="https://github.com/defich/ain"
                />,
                <ExternalLink
                  key="1"
                  className="text-primary-500"
                  url="mailto:security@defichain.com"
                />,
              ]}
            /> */}
            <div className="text-sm mt-1">
              [GPG:
              <Link
                href={{ pathname: "/keys/security@defichain.com.public.key" }}
                passHref
                className="contents"
              >
                <span className="text-primary-500 hover:underline cursor-pointer ml-1">
                  F7CE 1F52 D5ED 7EE3 FC37 4614 E2C1 1358 5F01 B88B
                </span>
              </Link>
              ]
            </div>
          </div>
          <div className="mt-5">
            {t("SubmissionSection.list.title")}
            <ul className="list-disc pl-4">
              {submissionList.map((item, index) => (
                <li key={`list-item-${index}`}>{item}</li>
              ))}
            </ul>
          </div>
        </Section>
      </Container>
    </>
  );
}

function LeaderboardSection(): JSX.Element {
  const { t } = useTranslation("page-bugbounty");
  const hunters: any[] = t("LeaderboardSection.hunters", {
    returnObjects: true,
  });

  return (
    <Section title={t("LeaderboardSection.title")} testId="LeaderboardSection">
      <div
        className="w-full text-xl text-gray-900 mb-6"
        data-testid="Header.desc.main"
      >
        {t("LeaderboardSection.desc")}
      </div>
      <div>
        {hunters.map((hunter, index) => (
          <Hunter hunter={hunter} index={index} key={`hunter-${index}`} />
        ))}
      </div>
    </Section>
  );
}
