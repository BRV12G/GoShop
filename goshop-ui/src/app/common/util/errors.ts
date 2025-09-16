export const getErrorMessage = (response: any) => {
    if(response.message){
        if (Array.isArray(response.message)) { // Validation errors from class-validator
            return formatErrorMessage(response.message[0]);
        }
        return formatErrorMessage(response.message);
    }
    return "Unknown error occurred";
}

const formatErrorMessage = (message: string) => {
    return message.charAt(0).toUpperCase() + message.slice(1);
}
