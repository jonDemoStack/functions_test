import { Handler } from '@netlify/functions'

export const handler: Handler = async (event, context) => {
  const { name = 'stranger' } = event.queryStringParameters

  return {
    statusCode: 200,
    body: '<!DOCTYPE html> <html><head><title>Page Title</title></head><body><p>This is a paragraph.</p> </body></html>',
  }
}
