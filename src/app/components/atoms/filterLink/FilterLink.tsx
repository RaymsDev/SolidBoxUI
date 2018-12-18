import * as React from 'react';
import { IFilterLinkProps } from './IFilterLinkProps';
export class FilterLink extends React.Component<IFilterLinkProps> {
  constructor(props: IFilterLinkProps) {
    super(props);

    this.onFilterClick = this.onFilterClick.bind(this);
  }
  public render(): JSX.Element {
    const { filter } = this.props;
    return (
      <a href="#" onClick={this.onFilterClick}>{filter.label}</a>
    );
  }

  private onFilterClick(e: React.MouseEvent): void {
    e.preventDefault();
    const { onClickHandler, filter } = this.props;
    onClickHandler(filter.value);
  }
}
