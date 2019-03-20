import { connect } from "react-redux";
import { IPageTemplateProps } from "../components/templates/pageTemplate/IPageTemplateProps";
import { PageTemplate } from "../components/templates/pageTemplate/PageTemplate";

import { IRootState } from "../store/store";

const mapStateToProps = (state: IRootState): Partial<IPageTemplateProps> => {
  const { isAuthenticated } = state.authState.authResult;
  return {
    isAuthenticated
  };
};

export default connect<Partial<IPageTemplateProps>>(mapStateToProps)(PageTemplate);
