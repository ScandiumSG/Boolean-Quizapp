export const baseQuizUrl = "https://bobbb.azurewebsites.net/play/quiz"

export const manageQuizUrl = "https://bobbb.azurewebsites.net/Build/quiz"

export const userHandlingUrl = "https://bobbb.azurewebsites.net/User/login"

export const userRegisterUrl = "https://bobbb.azurewebsites.net/User/register"


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