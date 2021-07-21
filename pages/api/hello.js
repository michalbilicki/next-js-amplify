// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const handler = (req, res) => {
  return res.status(200).json({ name: 'John Doe' })
}

export default handler;