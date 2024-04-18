const backendHost = "https://bobbb.azurewebsites.net/"

export const baseQuizUrl = backendHost+"play/quiz"

export const manageQuizUrl = backendHost+"Build/quiz"

export const userHandlingUrl = backendHost+"User/login"

export const userRegisterUrl = backendHost+"User/register"


export const requestData = (user, data, method) => {
    const request = {
        method: method,
        headers: {
          "accept": "*/*",
          "Authorization": `Bearer ${user.token}`,
          "content-type": "application/json"
        },
        body: JSON.stringify(data)
      }

    return request
}

export const requestWithoutAuth = (data, method) => {
    const request = {
        method: method,
        headers: {
          "accept": "*/*",
          "content-type": "application/json"
        },
        body: JSON.stringify(data)
      }

    return request
}

export const requestWithoutData = (user, method) => {
    const request = {
        method: method,
        headers: {
          "accept": "*/*",
          "Authorization": `Bearer ${user.token}`,
          "content-type": "application/json"
        },
      }

    return request
}