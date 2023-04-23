import {
    getCurrentTeam,
    getCurrentTeams,
} from '../../Api/Services/TeamsAPIService'

export async function currentTeam() {
    // TODO (High Prio) @Sherif Why do we store this on the server? Why not just get it from the store? (currentTeams)
    const response = await getCurrentTeam()

    if (response?.data) {
        return response.data
    }

    return null
}

export async function currentTeams() {
    const response = await getCurrentTeams()

    if (response?.data) {
        return response.data
    }

    return null
}
