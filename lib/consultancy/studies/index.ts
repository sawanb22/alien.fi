import type { CaseStudyTemplateData } from "./types";
import { auroraRetailStudy } from "./aurora-retail";
import { civicaStateStudy } from "./civica-state";
import { kestrelBankStudy } from "./kestrel-bank";
import { lumenLegalStudy } from "./lumen-legal";
import { northbayHealthStudy } from "./northbay-health";
import { oakridgeIndustrialStudy } from "./oakridge-industrial";
import { redlineLogisticsStudy } from "./redline-logistics";

export type { CaseStudyTemplateData } from "./types";

export const CASE_STUDY_TEMPLATES: Record<string, CaseStudyTemplateData> = {
  "northbay-health": northbayHealthStudy,
  "kestrel-bank": kestrelBankStudy,
  "redline-logistics": redlineLogisticsStudy,
  "oakridge-industrial": oakridgeIndustrialStudy,
  "aurora-retail": auroraRetailStudy,
  "lumen-legal": lumenLegalStudy,
  "civica-state": civicaStateStudy,
};

export const CASE_STUDY_TEMPLATE_SLUGS = Object.keys(CASE_STUDY_TEMPLATES);
