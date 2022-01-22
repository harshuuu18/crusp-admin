import joi from "joi";
import axios from "axios";
import { baseUrl, host } from "../config";

axios.defaults.baseURL = `${baseUrl}/user/`;
axios.defaults.headers = { "Content-Type": "application/json" };
export const SignUpRoute = async ({ body }) => {
  try {
    const Schema = joi
      .object({
        firstName: joi.string().required(),
        lastName: joi.string().required(),
        email: joi.string().required(),
        password: joi.string().required(),
      })
      .validate(body);

    if (Schema.error) {
      return console.log(Schema.error.message);
    }
    let data = Schema.value;

    const response = await axios.post("auth/signup", data, {
      headers: {
        [host.key]: host.value, // replace this with window.location.hostname
      },
    });

    if (response.data.status === 201) {
      console.log(response.data);
      return;
    }
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const LogInRoute = async ({ body }) => {
  try {
    const Schema = joi
      .object({
        email: joi.string().required(),
        password: joi.string().required(),
      })
      .validate(body);

    if (Schema.error) {
      return console.log(Schema.error.message);
    }
    let data = Schema.value;

    const response = await axios.post("auth/login", data, {
      headers: {
        [host.key]: host.value, // replace this with window.location.hostname
      },
    });

    if (response.data.status === 201) {
      console.log(response.data);
      return;
    }
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const GetContentsRoute = async ({ setContent, token }) => {
  try {
    const schema = {
      select: {},
      project: {},
      limit: 20,
      skip: 0,
    };

    const response = await axios.post("content/getContents", schema, {
      headers: {
        [host.key]: host.value, // replace this with window.location.hostname
        authorization: `Bearer ${token}`,
      },
    });

    if (response.data.status == 200) {
      // console.log({ data: response.data });
      setContent(response.data.data);
      return;
    }
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const GetProgramsRoute = async ({ setProgram, token }) => {
  try {
    const schema = {
      select: {},
      project: {},
      limit: 20,
      skip: 0,
    };

    const response = await axios.post("program/getPrograms", schema, {
      headers: {
        [host.key]: host.value, // replace this with window.location.hostname
        authorization: `Bearer ${token}`,
      },
    });

    if (response.data.status == 200) {
      console.log({ data: response.data });
      setProgram(response.data.data);
      return;
    }
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const GetProgramByIdRoute = async ({
  progromId,
  setProgramState,
  token,
}) => {
  try {
    const response = await axios.get(`program/${progromId}`, {
      headers: {
        [host.key]: host.value, // replace this with window.location.hostname
        authorization: `Bearer ${token}`,
      },
    });

    if (response.data.status == 200) {
      console.log({ data: response.data });
      setProgramState(response.data.data);
      return;
    }
  } catch (err) {
    console.log(err);
    return err;
  }
};

export const GetSessionsRoute = async ({ setSession, token }) => {
  try {
    const schema = {
      select: {},
      project: {},
      limit: 20,
      skip: 0,
    };

    const response = await axios.post("liveSessions/getSessions", schema, {
      headers: {
        [host.key]: host.value, // replace this with window.location.hostname
        authorization: `Bearer ${token}`,
      },
    });

    if (response.data.status == 200) {
      console.log({ data: response.data });
      setSession(response.data.data);
      return;
    }
  } catch (err) {
    console.log(err);
    return err;
  }
};
