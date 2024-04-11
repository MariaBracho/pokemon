import type { URLDetails } from './urlDetail';

interface VersionGroupDetail {
  level_learned_at: number;
  version_group: URLDetails;
  move_learn_method: URLDetails;
}

export interface Move {
  move: URLDetails;
  version_group_details: VersionGroupDetail[];
}
