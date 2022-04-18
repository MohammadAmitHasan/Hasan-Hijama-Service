import React from 'react';

const Blogs = () => {
    return (
        <div className='container mx-auto my-5 p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            <article className="p-4 rounded-lg leading-7 text-gray-700 border-2 shadow-lg hover:bg-gray-100 hover:border-red-200  ease-in duration-200">
                <h3 className='text-xl text-red-500 mb-3'>
                    Difference between authorization and authentication
                </h3>
                <p>
                    1. Authorization is used to give access to specific resources to a specific user where authentication is used to identify who the user is. <br />
                    2. Authentication is done before the authorization process where authorization process is done after the authentication process. <br />
                    3. Authorization needs users privilege level or access level where authentication needs login informations such as email ID, password, biometric data etc. <br />
                    4. Authorization determines the permission level or access level in the system where authentication validates whether the person is user or not. <br />

                </p>
            </article>
            <article className="p-4 rounded-lg leading-7 text-gray-700 border-2 shadow-lg hover:bg-gray-100 hover:border-red-200  ease-in duration-200">
                <h3 className='text-xl text-red-500 mb-3'>Why are you using firebase? What other options do you have to implement authentication?</h3>

                <p>
                    I am using firebase to implement the user authentication system in my websites. Through user authentication we can protect important contents from unauthorized users. Firebase provides several user authentication systems such as basic email password authentication, authentication through 3rd party accounts like Google, Facebook, GitHub etc. Firebase authentication makes the overall authentication process easier and secured. <br /><br />

                    Other options to implement authentication: <br />
                    1. Auth0 <br />
                    2. MongoDB <br />
                    3. Passport <br />
                    4. Okta <br />
                    5. Back4app <br />
                    6. Keycloak <br />
                    7. Amazon Cognito etc <br />
                </p>

            </article>
            <article className="p-4 rounded-lg leading-7 text-gray-700 border-2 shadow-lg hover:bg-gray-100 hover:border-red-200  ease-in duration-200">
                <h3 className='text-xl text-red-500 mb-3'>
                    What other services does firebase provide other than authentication.?
                </h3>
                <p>
                    Firebase provides several services such as:
                    1. Cloud Fire store database <br />
                    2. Real time database <br />
                    3. Cloud Storage <br />
                    4. Hosting <br />
                    5. Google analytics <br />
                    6. Machine learning and predictions <br />
                    7. Cloud messaging <br />
                    8. Remote config <br />

                </p>
            </article>
        </div>
    );
};

export default Blogs;