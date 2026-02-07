export const customerAuth = (req, res, next) => {
    console.log("Customer Auth is being checked");
    const token = 'xyz';
    const isCustomerAuthorized = token === 'xyz';
    if(!isCustomerAuthorized){
        res.status(401).send("Unauthorized request");
    }else {
        next();
    }
}

