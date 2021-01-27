const variables = {
    development: {
        googleApi: 'AIzaSyBj3jVbtUo-eigAhnFar8TBKuvU9uBl5rs'
    },
    production: {
        googleApi: 'AIzaSyBj3jVbtUo-eigAhnFar8TBKuvU9uBl5rs'
    }
};

const getEnvVariables = () => {
    if (__DEV__) {
        return variables.development;
    }
    return variables.production;
};

export default getEnvVariables;
