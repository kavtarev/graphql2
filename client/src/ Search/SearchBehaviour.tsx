import React from 'react';

interface Props {}

interface State {}
export class SearchBarBehaviour extends React.Component<Props, State> {
    public state: Readonly<State> = {
        searchValue: '',
        isShowSpinner: false,
    };
}
