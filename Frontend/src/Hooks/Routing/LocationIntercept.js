import React from 'react'
import { useLocationEffect } from './LocationEffect'
import { useAppNavigate } from './AppNavigate'
import { useTeam } from '../Redux/Team'
import * as Flows from '../../Config/Flows/FlowNames'
import {
    matchAllWordsExcept,
    uuidRegex,
    wordRegex,
} from '../../Services/Utils/RegexUtil'
import { createPathFromFlowInput } from '../../Services/Flows/Helpers/FlowUtil'
import {
    flowRoute,
    getLocationParams,
    surveyFlowRoute,
} from '../../Services/Utils/RoutingUtil'

const flowParams = (params = {}) => {
    return createPathFromFlowInput(params)
}

const allExceptResultRegex = matchAllWordsExcept('result')

const params = getLocationParams()

const replaceMap = {
    [`^(register|login)`]: {
        to: () => flowRoute(Flows.LOGIN_FLOW),
        params: (match) =>
            flowParams({
                ...params,
                type: match[1],
            }),
    },
    [`^teams/(${uuidRegex})/invite`]: {
        to: (team) => flowRoute(Flows.CREATE_AND_INVITE_TEAM_FLOW),
        params: (match, team) =>
            flowParams({
                organisationId: team?.id,
                organisationName: team?.name,
                onlyInvite: true,
            }),
    },
    [`^teams/(${uuidRegex})/reflection`]: {
        to: (team) => flowRoute(Flows.TEAM_ANALYSIS_FLOW, team?.id),
    },
    [`^invite/(${wordRegex})/(${uuidRegex})`]: {
        to: (team) => flowRoute(Flows.RESPOND_INVITE_TEAM_FLOW),
        params: (match, team) =>
            flowParams({
                inviteId: match[2],
                action: match[1],
            }),
    },
    [`^profile/result`]: {
        to: (team) => flowRoute(Flows.PERSONALITY_ANALYSIS_FLOW),
    },
    [`^project/profile_base_and_analysis/new`]: {
        to: (team) => flowRoute(Flows.PERSONALITY_ANALYSIS_FLOW),
    },
    [`^project/(${uuidRegex})/confirm`]: {
        to: (team, match) => surveyFlowRoute(match[1], team?.id),
    },
    [`^profile/motive-structure`]: {
        to: () => flowRoute(Flows.MOTIVE_STRUCTURE_FLOW),
    },
    [`^survey/project/(${uuidRegex})`]: {
        to: (team, match) => surveyFlowRoute(match[1], team?.id),
    },
    [`^teams/${uuidRegex}/development/(${allExceptResultRegex})/(individualtools)$`]:
        {
            skip: true,
        },
    [`^teams/${uuidRegex}/development/(${allExceptResultRegex})/(${allExceptResultRegex})$`]:
        {
            to: (team) => flowRoute(Flows.TEAM_DEVELOPMENT_FLOW, team?.id),
            params: (match, team) =>
                flowParams({
                    module: match[1],
                    subModule: match[2],
                }),
        },
    [`^teams/${uuidRegex}/development/(${allExceptResultRegex})/(${allExceptResultRegex})/(${allExceptResultRegex})$`]:
        {
            to: (team) => flowRoute(Flows.TEAM_DEVELOPMENT_FLOW, team?.id),
            params: (match, team) =>
                flowParams({
                    module: match[1],
                    subModule: match[2],
                    subSubModule: match[3],
                }),
        },
    [`^teams/${uuidRegex}/development$`]: {
        to: (team) => flowRoute(Flows.TEAM_DEVELOPMENT_FLOW, team?.id),
    },
}

export function useLocationIntercept() {
    const { navigate } = useAppNavigate()
    const [team] = useTeam()

    useLocationEffect((location) => {
        // refactor to function
        const path = location.pathname.substring(1)

        for (let regex of Object.keys(replaceMap)) {
            const match = path.match(regex)

            if (match) {
                if (replaceMap[regex]?.skip) {
                    break
                }
                const pathname = replaceMap[regex]?.to(team, match)

                let search = ''
                if (replaceMap[regex]?.params) {
                    search = replaceMap[regex]?.params(match, team)
                }

                navigate({
                    pathname,
                    search,
                })
                return
            }
        }
    })
}
