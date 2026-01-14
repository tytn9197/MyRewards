export interface RewardsRequest {
}

export interface RewardsResponse {
  count: number
  next: string | null
  previous: string | null
  results: Reward[]
}

export interface Reward {
  activation_description: string
  amount: number | null
  availability: number
  consume_points: boolean
  cr_points: null
  cr_rank: number
  description: string | null
  highscore_contest: boolean
  id: string
  image: string
  is_activateable: null
  is_deactivatable: null
  is_activated: null
  is_active: boolean
  throttle: RewardThrottle | null
  time_range_redeem_count: null
  contest: boolean
  is_redeemable: null
  limited: boolean
  name: string
  needed_points: number
  needed_visits: number
  pictures: RewardPicture[]
  point_contest: boolean
  ranks: number
  redeem_count: null
  redeem_description: string
  require_shop_when_redeemed: boolean
  show_progress_bar: boolean
  single_use: boolean
  shipping: boolean
  redeem_success_alert_text: string
  app_form: RewardAppForm | null
  bounty_redeem_alert_header: string
  bounty_redeem_alert_text: string
  show_ranking: boolean
  contest_type: null
  bounty_activate_alert_header: string
  bounty_activate_alert_text: string
  can_participate: null
  is_participating: null
  required_status: RewardRequiredStatus | null
  instant: boolean
  valid_from: null
  valid_until: null
  manual_claim: boolean
  shop: null
  category: null
  condition_id: null
  is_expired: boolean
  point_pool: null
  order: number | null
  terms: null
  variations: null
  promo_redeem_types: RewardPromoRedeemType[]
  show_confirmation_dialog: string | null
  reward_type: number
  prizes: null
  is_free_reward_usage_enabled: boolean
  adjust_event_tokens: RewardAdjustEventTokens | null
  type: number
}

export interface RewardThrottle {
  redeem_limit_time_range: string
}

export interface RewardPicture {
  image: string
  order: number
  type: null
}

export interface RewardPromoRedeemType {
  type: string
}

export interface RewardAdjustEventTokens {
  view: string
  activate_click: string
  deactivate_click: string
}

export interface RewardAppForm {
  id: string
  title: string
  description: string
  form_definition: RewardFormDefinition
}

export interface RewardFormDefinition {
  sections: RewardFormSection[]
}

export interface RewardFormSection {
  name: string
  fields: RewardFormField[]
  translations: RewardFormTranslations
}

export interface RewardFormField {
  name: string
  type: string
  key: string
  description?: string
  required: string | boolean
  translations: RewardFormTranslations
  value_key?: string
  value_type?: string
  placeholder?: string
  options?: RewardFormOption[]
}

export interface RewardFormTranslations {
  en: {
    name: string
    description?: string
  }
}

export interface RewardFormOption {
  name: string
  key: string
}

export interface RewardRequiredStatus {
  id: number
  name: string
  description: string
  icon: null
  order: null
  definition_app: null
}
