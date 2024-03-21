import express = require('express');

const issueCredentialUseCase = require('../useCases/issueCredentialUseCase');

export const issueCredential = async (req: express.Request, res: express.Response) => {
  const { givenName, email, countryOfResidence, dateOfBirth, photo, walletDid } = req.body;

  console.log('[Controller] Data received');

  // @TODO VALIDATE DATA
  console.log('[Controller] Data validated');

  try {
    const credential = issueCredentialUseCase({ givenName, email, countryOfResidence, dateOfBirth, photo, walletDid });
    res
      .status(201)
      .json({ data: credential });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }  
};
