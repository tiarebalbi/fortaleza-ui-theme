import styled from 'styled-components';
import { palette } from 'styled-theme';

const SideViewStyle = styled.div`
  backdrop-filter: blur(5px);
  background: rgba(0, 0, 0, 0.7);
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 300;

  .container {
    display: flex;
    height: 100%;

    .space {
      flex: 2;
    }
    .content {
      background: ${palette(1, 'white')};
      display: flex;
      flex-direction: column;
      overflow: hidden;
      width: 600px;

      header {
        background: ${palette(0, 'primary')};
        color: #ffffff;
        height: 65px;
        line-height: 65px;
        padding-left: 35px;
        width: 100%;
        .anticon-close-circle {
          color: #ffffff;
        }
      }

      h1 {
        color: #ffffff;
        float: left;
        font-size: 16px;
        font-weight: bold;
        line-height: 65px;
        text-align: left;
      }

      a {
        float: right;
        padding-right: 35px;
      }
    }
  }
  .component {
    height: 100%;
    padding: 30px;

    form {
      display: flex;
      flex-direction: column;
      height: 100%;

      .form-container {
        height: inherit;
      }

      .input-container {
        padding: 30px;

        &.invisible {
          display: none;
          opacity: 0;
          visibility: hidden;
        }
      }

      .ant-steps {
        padding-left: 30px;
        padding-right: 30px;
        padding-top: 30px;
      }

      footer {
        background: #f5f8fa;
        border-top: 1px solid #cbd6e2;
        flex: 1;
        height: 90px;
        line-height: 80px;
        padding-left: 30px;
        padding-right: 30px;

        button {
          margin-right: 10px;
        }
      }
    }
  }
`;

export default SideViewStyle;
