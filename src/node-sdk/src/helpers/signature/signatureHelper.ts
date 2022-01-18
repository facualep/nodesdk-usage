/* tslint:disable */
const Certificate  = require('crypto') 
const { subtle } = require('crypto').webcrypto /* tslint:disable */
const pem = require('pem') //TODO Turn this into an import statement /* tslint:disable */
const fs = require('fs') /* tslint:disable */


export const canonizeJson = async (object: any) => {
  const canonized = ''

  // const canonized = await jsonld.canonize(object, {
  //   algorithm: 'URDNA2015',
  //   format: 'application/n-quads',
  // })

  return canonized
}

function getHash(content: any, inputEncoding = 'utf8', outputEncoding='base64') {
	const shasum = Certificate.createHash('sha512')
	shasum.update(content, inputEncoding)
	const res = shasum.digest(outputEncoding)
	return res
}

const getCertificateAssets = async (objectToSign: object) => {
	const pfx = fs.readFileSync('/home/facualep/projects/node-sdk-implement/src/node-sdk/Houlak.pfx')
	let privateKey
	let cbresult = await pem.readPkcs12(pfx, { p12Password: '1C97MOfustztkNfOtuET' }, (_err: any, cert: any) => {
		privateKey = cert.key
		privateKey = privateKey
			.split('\n')
			.filter((line: any) => !line.includes('-----'))
			.map((line: any) => line.trim() )
			.join('')
		const stringifiedCert = cert.toString()
			.split('\n')
			.filter((line: any) => !line.includes('-----'))
			.map((line: any) => line.trim() )
			.join('')		
		const thumbnail = getHash(stringifiedCert, 'base64', 'hex').toUpperCase()
		subtle.sign(privateKey, objectToSign)
			.then((data: any) => {
				console.log(data)
			})
			.catch((err: any) => {console.log(err)})
		// console.log('finish')
		// return ({privateKey, thumbnail})


	})

}

const signObject = async (objectToSign: object) => {
	getCertificateAssets(objectToSign)
}

const testSigning = async () => {
	signObject({
		name: 'abcd',
		lastname: 'sdasda'
	})
}

export const CertificateHelper = {
	testSigning
}
