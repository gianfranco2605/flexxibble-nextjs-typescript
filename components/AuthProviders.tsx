"use client";

import { signIn, getProviders } from 'next-auth/react';
import { useState, useEffect } from "react";

// typescript
type Provider = {
  id: string;
  name: string;
  type: string;
  singinUrl: string;
  callbackurl: string;
  // ? = optional
  singinUrlParams?: Record<string, string> | null;
 }

 type Providers = Record<string, Provider>;

const AuthProviders = () => {

  const [providers, setProviders] = useState<Providers | null>(null);

  useEffect(() => {
    const fetchProviders = async () => {
      const res = await getProviders();

      console.log(res);
      

      setProviders(res);
    }

    fetchProviders();
  }, []);

  // loggin button
  if(providers) {
    return (
      <div>
        {Object.values(providers).map((provider: Provider, i) => (<button key={i} onClick={() => signIn(provider?.id)}>{provider.id}</button>
        ))}
      </div>
    )
  }
}

export default AuthProviders