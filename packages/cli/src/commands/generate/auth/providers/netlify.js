// the lines that need to be added to index.js
export const config = {
  imports: [`import netlifyIdentity from 'netlify-identity-widget'`],
  init: 'netlifyIdentity.init()',
  authProvider: {
    client: 'netlifyIdentity',
    type: 'netlify',
  },
}

// required packages to install
export const packages = ['netlify-identity-widget']

// any notes to print out when the job is done
export const notes = [
  'You will need to enable Identity on your Netlify site and configure the API endpoint.',
  'See: https://github.com/netlify/netlify-identity-widget#localhost',
]
