import client from '@/services/api/client'

export default {
  async track(affiliateCode: string): Promise<boolean> {
    return (await client({ url: `/referral/track`, method: 'get', params: { affiliateCode } })).data
  }
}
