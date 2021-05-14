import React from 'react';

import JQueryUdemy from '../../images/certificates/jquery_udemy.jpg'
import JSBasicHackerRank from '../../images/certificates/javascript_basic_hackerrank.png'
import ReactBasicHackerRank from '../../images/certificates/react_basic_hackerrank.png'
import ProblemSolvingBasicHackerRank from '../../images/certificates/problem_solving_hackerrank.png'
import ProblemSolvingIntermediateHackerRank from '../../images/certificates/problem_solving_hackerrank_intermediate.png'

let certificatesList = [
    {   
        index: 0,
        path: JQueryUdemy,
        src: JQueryUdemy,
        title: 'JQuery Udemy',
        description: 'Some description'
    },
    {   
        index: 1,
        path: JSBasicHackerRank,
        src: JSBasicHackerRank,
        title: 'Java',
        description: 'Some description'
    },
    {   
        index: 2,
        path: ProblemSolvingBasicHackerRank,
        src: ProblemSolvingBasicHackerRank,
        title: 'Problem Solving Basic HackerRank',
        description: 'Some description'
    },
    {   
        index: 3,
        path: ProblemSolvingIntermediateHackerRank,
        src: ProblemSolvingIntermediateHackerRank,
        title: 'Problem Solving Intermediate HackerRank',
        description: 'Some description'
    },
    {   
        index: 4,
        path: ReactBasicHackerRank,
        src: ReactBasicHackerRank,
        title: 'React Basic HackerRank',
        description: 'Some description'
    },
]

export default certificatesList;
