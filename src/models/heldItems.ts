import type { URLDetails } from './urlDetail';

interface VersionDetail {
  rarity: number;
  version: URLDetails;
}

export interface HeldItem {
  item: URLDetails;
  version_details: VersionDetail[];
}
