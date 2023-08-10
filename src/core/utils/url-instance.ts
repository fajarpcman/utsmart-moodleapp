// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

interface IEnv {
  dev: string;
  prod: string;
}

const ENV: IEnv = {
  dev: "https://utsmart-test.unitedtractors.com/",
  prod: "https://utsmart.unitedtractors.com/",
};

const isEnv: string = "prod";

const URL_ENDPOINT: string = isEnv === "dev" ? ENV.dev : ENV.prod;

export { URL_ENDPOINT };
