import client from '@/services/api/client'

type Lead = {
  email: string
  shopUrl: string
}

export default {
  async create(lead: Lead): Promise<Lead> {
    return (await client({ url: `/lead`, method: 'post', data: lead })).data
  }
}
