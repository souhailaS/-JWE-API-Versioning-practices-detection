export default [
  { integer: /^(\d{3}|\d{2}|\d{1})+$/i },
  { "v*#": /^v(\d{3}|\d{2}|\d{1})+/i },
  { "v*": /^v(\d{3}|\d{2}|\d{1})+$/i },
  { "v*.beta": /^v\d+(\.|-)beta\d*$/i },
  { "v*-#": /^v\d-/i },
  { "v*beta*": /^v\d+beta\d*$/i },
  { "v*rc*": /^v\d+rc\d*$/i },
  { "v*alpha*": /^v\d+alpha\d*$/i },
  { "v*dev*": /^v\d+dev\d*$/i },
  { "v*pre*": /^v\d+pre\d*$/i },

  { "v*p*beta*": /^v\d+p\d+beta\d*$/i },
  { "v*p*rc*": /^v\d+p\d+rc\d*$/i },
  { "v*p*alpha*": /^v\d+p\d+alpha\d*$/i },
  { "v*p*dev*": /^v\d+p\d+dev\d*$/i },
  { "v*p*pre*": /^v\d+p\d+pre\d*$/i },

  { "v*beta*.*": /^v\d+beta\d+\.\d+$/i },
  { "v*rc*.*": /^v\d+rc\d+\.\d+$/i },
  { "v*alpha*.*": /^v\d+alpha\d+\.\d+$/i },
  { "v*dev*.*": /^v\d+dev\d+\.\d+$/i },
  { "v*pre*.*": /^v\d+pre\d+\.\d+$/i },
  { "v*snapshot*.*": /^v\d+snapshot\d+$/i },

  {
    "semver-2#": /^(v|)\d+\.\d+/i,
  },
  {
    "semver-3#": /^(v|)\d+\.\d+\.\d+/,
  },
  {
    "semver-4#": /^(v|)\d+\.\d+\.\d+\.\d+/,
  },
  {
    "semver-5#": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+/,
  },
  {
    "semver-6#": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+/,
  },

  { "semver-2": /^(v|)(\d{3}|\d{2}|\d{1})\.\d+$/i },
  { "semver-3": /^(v|)(\d{3}|\d{2}|\d{1})\.\d+\.\d+$/i },
  { "semver-4": /^(v|)\d+\.\d+\.\d+\.\d+$/i },
  { "semver-5": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+$/i },
  { "semver-6": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+$/i },

  { "semver-SNAPSHOT*": /^(v|)\d+\.\d+(\.|-)SNAPSHOT\d*$/i },
  { "semver-SNAPSHOT*": /^(v|)\d+\.\d+\.\d+(\.|-)SNAPSHOT\d*$/i },
  { "semver-SNAPSHOT*": /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)SNAPSHOT\d*$/i },
  { "semver-SNAPSHOT*": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)SNAPSHOT\d*$/i },
  {
    "semver-SNAPSHOT*": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)SNAPSHOT\d*$/i,
  },

  { "semver-SNAPSHOT*.*": /^(v|)\d+\.\d+\.\d+(\.|-)SNAPSHOT\d*\.\d+$/i },
  { "semver-SNAPSHOT*.*": /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)SNAPSHOT\d*\.\d+$/i },
  {
    "semver-SNAPSHOT*.*": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)SNAPSHOT\d*\.\d+$/,
  },
  {
    "semver-SNAPSHOT*.*":
      /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)SNAPSHOT\d*\.\d+$/,
  },
  { "semver-rc*": /^(v|)\d+\.\d+(\.|-)rc\d*$/i },
  { "semver-rc*": /^(v|)\d+\.\d+\.\d+(\.|-)rc\d*$/i },
  { "semver-rc*": /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)rc\d*$/i },
  { "semver-rc*": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)rc\d*$/i },
  { "semver-rc*": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)rc\d*$/i },

  { "semver-rc*.*": /^(v|)\d+\.\d+-rc\d*\.\d+$/i },
  { "semver-rc*.*": /^(v|)\d+\.\d+\.\d+-rc\d*\.\d+$/i },
  { "semver-rc*.*": /^(v|)\d+\.\d+\.\d+\.\d+-rc\d*\.\d+$/i },
  { "semver-rc*.*": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+-rc\d*\.\d+$/i },
  { "semver-rc*.*": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+-rc\d*\.\d+$/i },

  { "semver-beta*": /^(v|)\d+\.\d+(\.|-)beta\d*$/i },
  { "semver-beta*": /^(v|)\d+\.\d+\.\d+(\.|-)beta\d*$/i },
  { "semver-beta*": /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)beta\d*$/i },
  { "semver-beta*": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)beta\d*$/i },
  { "semver-beta*": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)beta\d*$/i },

  { "semver-beta*.*": /^(v|)\d+\.\d+(\.|-)beta\d*\.\d+$/i },
  { "semver-beta*.*": /^(v|)\d+\.\d+\.\d+(\.|-)beta\d*\.\d+$/i },
  { "semver-beta*.*": /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)beta\d*\.\d+$/i },
  { "semver-beta*.*": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)beta\d*\.\d+$/i },
  { "semver-beta*.*": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)beta\d*\.\d+$/i },

  { "semver-alpha*": /^(v|)\d+\.\d+(\.|-)alpha\d*$/i },
  { "semver-alpha*": /^(v|)\d+\.\d+\.\d+(\.|-)alpha\d*$/i },
  { "semver-alpha*": /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)alpha\d*$/i },
  { "semver-alpha*": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)alpha\d*$/i },
  { "semver-alpha*": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)alpha\d*$/i },

  { "semver-alpha*.*": /^(v|)\d+\.\d+(\.|-)alpha\d*\.\d+$/i },
  { "semver-alpha*.*": /^(v|)\d+\.\d+\.\d+(\.|-)alpha\d*\.\d+$/i },
  { "semver-alpha*.*": /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)alpha\d*\.\d+$/i },
  { "semver-alpha*.*": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)alpha\d*\.\d+$/i },
  {
    "semver-alpha*.*": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)alpha\d*\.\d+$/,
  },

  { "semver-preview*": /^(v|)\d+\.\d+(\.|-)preview$/i },
  { "semver-preview*": /^(v|)\d+\.\d+\.\d+(\.|-)preview$/i },
  { "semver-preview*": /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)preview$/i },
  { "semver-preview*": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)preview$/i },
  { "semver-preview*": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)preview$/i },

  { "semver-preview*.*": /^(v|)\d+\.\d+(\.|-)preview\d*\.\d+$/i },
  { "semver-preview*.*": /^(v|)\d+\.\d+\.\d+(\.|-)preview\d*\.\d+$/i },
  { "semver-preview*.*": /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)preview\d*\.\d+$/i },
  {
    "semver-preview*.*": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)preview\d*\.\d+$/i,
  },
  {
    "semver-preview*.*":
      /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)preview\d*\.\d+$/,
  },

  { "semver-dev*": /^(v|)\d+\.\d+(\.|-)dev\d*$/i },
  { "semver-dev*": /^(v|)\d+\.\d+\.\d+(\.|-)dev\d*$/i },
  { "semver-dev*": /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)dev\d*$/i },
  { "semver-dev*": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)dev\d*$/i },
  { "semver-dev*": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)dev\d*$/i },

  { "semver-dev*.*": /^(v|)\d+\.\d+(\.|-)dev\d*\.\d+$/i },
  { "semver-dev*.*": /^(v|)\d+\.\d+\.\d+(\.|-)dev\d*\.\d+$/i },
  { "semver-dev*.*": /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)dev\d*\.\d+$/i },
  { "semver-dev*.*": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)dev\d*\.\d+$/i },
  { "semver-dev*.*": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)dev\d*\.\d+$/i },

  { "semver-pre*": /^(v|)\d+\.\d+(\.|-)pre\d*$/i },
  { "semver-pre*": /^(v|)\d+\.\d+\.\d+(\.|-)pre\d*$/i },
  { "semver-pre*": /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)pre\d*$/i },
  { "semver-pre*": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)pre\d*$/i },
  { "semver-pre*": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)pre\d*$/i },

  { "semver-pre*.*": /^(v|)\d+\.\d+(\.|-)pre\d*\.\d+$/i },
  { "semver-pre*.*": /^(v|)\d+\.\d+\.\d+(\.|-)pre\d*\.\d+$/i },
  { "semver-pre*.*": /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)pre\d*\.\d+$/i },
  { "semver-pre*.*": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)pre\d*\.\d+$/i },
  { "semver-pre*.*": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)pre\d*\.\d+$/i },


  
  { "date(yyyy.mm.dd)": /^\d{4}\.\d{2}\.\d{2}$/i },
  { "date(yyyy.mm)": /^\d{4}\.\d{2}$/i },
  { "date(yyyy)": /^\d{4}$/i },
  { "vdate(yyyy-mm-dd)": /^v\d{4}-\d{2}-\d{2}$/i },
  { "date(yyyy-mm-dd)-#": /^\d{4}-\d{2}-\d{2}/i },
  { "date(yyyy-mm-dd).semver": /^\d{4}-\d{2}-\d{2}\.\d+$/i },
  { "date(yyyy-mm-dd)": /^\d{4}-\d{2}-\d{2}$/i },
  // 2017-10-13.9.11.54
  {
    "date(yyyy-mm-ddThh:mm:ssZ)": /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/,
  },
  {
    "date(yyyy-mm-dd).hh.mm.ss":
      /^\d{4}-\d{2}-\d{2}\.\d{1,2}\.\d{1,2}\.\d{1,2}$/i,
  },
  { "date(yyyy-mm-dd)-preview": /^\d{4}-\d{2}-\d{2}-preview$/i },
  { "date(yyyy-mm-dd)-preview#": /^\d{4}-\d{2}-\d{2}-preview/i },
  { "date(yyyy-mm-dd)-preview*": /^\d{4}-\d{2}-\d{2}-preview\d$/i },
  // full date such as 2019-06-01T00:00:00.000+00:00
  {
    "date(ISO 8601)":
      /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}\+\d{2}:\d{2}$/,
  },
  {
    "date(yyyy-mm-ddThh:mm:ssZ)": /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/,
  }
,
  { "date(yyyy-mm)": /^\d{4}-\d{2}$/i },
  { "date(yyyy/mm/dd)": /^\d{4}\/\d{2}\/\d{2}$/i },
  { "date(yyyy/mm)": /^\d{4}\/\d{2}$/i },
  {
    "date(yyyymmdd)": /^20[1-2][0-9](0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/i,
  },
  {
    "date(Month yyyy)":
      /(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) 20[1-2][0-9]$/,
  },


  { "stable*": /^(S|s)table\d*$/i },
  { "latest*": /^(L|l)atest\d*$/i },
  // { "current*": /^(C|c)urrent\d*$/i },
  {"test*": /^(T|t)est\d*$/i },
  { "new*": /^new/i },
  { "SNAPSHOT*": /^SNAPSHOT\d$/i },
  { "rc*": /^rc\d*$/i },
  { "beta*": /^beta\d*$/i },
  { "alpha*": /^alpha\d*$/i },
  { "preview*": /^preview\d*$/i },
  { "dev*": /^dev\d*$/i },
  { "pre*": /^pre\d*$/i },
  { "develop*": /^develop\d*$/i },
  { "semver.rc*.date": /^(v|)\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}\.\d{2}\.\d{2}$/i },
  {
    "semver.rc*.date":
      /^(v|)\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}\.\d{2}\.\d{2}$/,
  },
  {
    "semver.rc*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}\.\d{2}\.\d{2}$/,
  },
  {
    "semver.rc*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}\.\d{2}\.\d{2}$/,
  },
  {
    "semver.rc*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}\.\d{2}\.\d{2}$/,
  },
  { "semver.rc*.date": /^(v|)\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}\.\d{2}$/i },
  { "semver.rc*.date": /^(v|)\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}\.\d{2}$/i },
  {
    "semver.rc*.date": /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}\.\d{2}$/,
  },
  {
    "semver.rc*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}\.\d{2}$/,
  },
  {
    "semver.rc*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}\.\d{2}$/,
  },
  { "semver.rc*.date": /^(v|)\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}$/i },
  { "semver.rc*.date": /^(v|)\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}$/i },
  { "semver.rc*.date": /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)rc\d.\d{4}$/i },
  { "semver.rc*.date": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}$/i },
  {
    "semver.rc*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}$/,
  },
  { "semver.rc*.date": /^(v|)\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}-\d{2}-\d{2}$/i },
  {
    "semver.rc*.date": /^(v|)\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}-\d{2}-\d{2}$/,
  },
  {
    "semver.rc*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}-\d{2}-\d{2}$/,
  },
  {
    "semver.rc*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}-\d{2}-\d{2}$/,
  },
  {
    "semver.rc*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}-\d{2}-\d{2}$/,
  },
  { "semver.rc*.date": /^(v|)\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}-\d{2}$/i },
  { "semver.rc*.date": /^(v|)\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}-\d{2}$/i },
  {
    "semver.rc*.date": /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}-\d{2}$/i,
  },
  {
    "semver.rc*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}-\d{2}$/,
  },
  {
    "semver.rc*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}-\d{2}$/,
  },
  { "semver.rc*.date": /^(v|)\d+\.\d+(\.|-)rc\d.\d{4}\/\d{2}\/\d{2}$/i },
  { "semver.rc*.date": /^(v|)\d+\.\d+\.\d+(\.|-)rc\d.\d{4}\/\d{2}\/\d{2}$/i },
  {
    "semver.rc*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}\/\d{2}\/\d{2}$/,
  },
  {
    "semver.rc*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}\/\d{2}\/\d{2}$/,
  },
  {
    "semver.rc*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}\/\d{2}\/\d{2}$/,
  },
  { "semver.rc*.date": /^(v|)\d+\.\d+.rc\d*(\.|-)\d{4}\/\d{2}$/i },
  { "semver.rc*.date": /^(v|)\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}\/\d{2}$/i },
  {
    "semver.rc*.date": /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}\/\d{2}$/,
  },
  {
    "semver.rc*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}\/\d{2}$/,
  },
  {
    "semver.rc*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)\d{4}\/\d{2}$/,
  },
  {
    "semver.rc*.date":
      /^(v|)\d+\.\d+.rc\d.20[1-2][0-9](0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/,
  },
  {
    "semver.rc*.date":
      /^(v|)\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)20[1-2][0-9](0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/,
  },
  {
    "semver.rc*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)20[1-2][0-9](0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/,
  },
  {
    "semver.rc*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)20[1-2][0-9](0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/,
  },
  {
    "semver.rc*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)20[1-2][0-9](0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/,
  },
  {
    "semver.rc*.date":
      /^(v|)\d+\.\d+(\.|-)rc\d*(\.|-)(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) 20[1-2][0-9]$/,
  },
  {
    "semver.rc*.date":
      /^(v|)\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) 20[1-2][0-9]$/,
  },
  {
    "semver.rc*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) 20[1-2][0-9]$/,
  },
  {
    "semver.rc*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) 20[1-2][0-9]$/i,
  },
  {
    "semver.rc*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)rc\d*(\.|-)(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) 20[1-2][0-9]$/i,
  },
  // Beta versions
  {
    "semver (beta)": /^(v|)\d+\.\d+(\.|-| )\(beta\d*\)/i,
  },
  {
    "semver (beta)": /^(v|)\d+\.\d+\.\d+(\.|-| )\(beta\d*\)/i,
  },
  {
    "semver (beta)": /^(v|)\d+\.\d+\.\d+\.\d+(\.|-| )\(beta\d*\)/i,
  },
  {
    "semver (beta)": /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-| )\(beta\d*\)/i,
  },
  // v1_beta.2.0
  {
    "v*_beta.semver-2": /^v\d+_\beta\d*\.\d+$/i,
  },
  {
    "semver.beta*.date":
      /^(v|)\d+\.\d+(\.|-)beta\d*(\.|-)\d{4}\.\d{2}\.\d{2}$/i,
  },
  {
    "semver.beta*.date":
      /^(v|)\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)\d{4}\.\d{2}\.\d{2}$/,
  },
  {
    "semver.beta*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)\d{4}\.\d{2}\.\d{2}$/,
  },
  {
    "semver.beta*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)\d{4}\.\d{2}\.\d{2}$/,
  },
  {
    "semver.beta*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)\d{4}\.\d{2}\.\d{2}$/,
  },
  {
    "semver.beta*.date":
      /^(v|)\d+\.\d+.beta\d.20[1-2][0-9](0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/,
  },
  {
    "semver.beta*.date":
      /^(v|)\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)20[1-2][0-9](0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/,
  },
  {
    "semver.beta*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)20[1-2][0-9](0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/,
  },
  {
    "semver.beta*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)20[1-2][0-9](0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/,
  },
  {
    "semver.beta*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)20[1-2][0-9](0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])$/,
  },
  {
    "semver.beta*.date":
      /^(v|)\d+\.\d+(\.|-)beta\d*(\.|-)(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) 20[1-2][0-9]$/,
  },
  {
    "semver.beta*.date":
      /^(v|)\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) 20[1-2][0-9]$/,
  },
  {
    "semver.beta*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) 20[1-2][0-9]$/,
  },
  {
    "semver.beta*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) 20[1-2][0-9]$/,
  },
  {
    "semver.beta*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) 20[1-2][0-9]$/,
  },
  {
    "semver.beta*.date": /^(v|)\d+\.\d+(\.|-)beta\d*(\.|-)\d{4}\-\d{2}\-\d{2}$/,
  },
  {
    "semver.beta*.date":
      /^(v|)\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)\d{4}\-\d{2}\-\d{2}$/,
  },
  {
    "semver.beta*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)\d{4}\-\d{2}\-\d{2}$/,
  },
  {
    "semver.beta*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)\d{4}\-\d{2}\-\d{2}$/,
  },
  {
    "semver.beta*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)\d{4}\-\d{2}\-\d{2}$/,
  },
  {
    "semver.beta*.date": /^(v|)\d+\.\d+(\.|-)beta\d*(\.|-)\d{4}\/\d{2}\/\d{2}$/,
  },
  {
    "semver.beta*.date":
      /^(v|)\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)\d{4}\/\d{2}\/\d{2}$/,
  },
  {
    "semver.beta*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)\d{4}\/\d{2}\/\d{2}$/,
  },
  {
    "semver.beta*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)\d{4}\/\d{2}\/\d{2}$/,
  },
  {
    "semver.beta*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)\d{4}\/\d{2}\/\d{2}$/,
  },
  { "semver.beta*.date": /^(v|)\d+\.\d+(\.|-)beta\d*(\.|-)\d{4}\/\d{2}$/i },
  {
    "semver.beta*.date": /^(v|)\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)\d{4}\/\d{2}$/i,
  },
  {
    "semver.beta*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)\d{4}\/\d{2}$/,
  },
  {
    "semver.beta*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)\d{4}\/\d{2}$/,
  },
  {
    "semver.beta*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)\d{4}\/\d{2}$/,
  },
  { "semver.beta*.date": /^(v|)\d+\.\d+(\.|-)beta\d*(\.|-)\d{4}$/i },
  { "semver.beta*.date": /^(v|)\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)\d{4}$/i },
  { "semver.beta*.date": /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)\d{4}$/i },
  {
    "semver.beta*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)\d{4}$/,
  },
  {
    "semver.beta*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)\d{4}$/,
  },
  { "semver.beta*.date": /^(v|)\d+\.\d+(\.|-)beta\d*(\.|-)\d{4}\-\d{2}$/i },
  {
    "semver.beta*.date": /^(v|)\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)\d{4}\-\d{2}$/i,
  },
  {
    "semver.beta*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)\d{4}\-\d{2}$/,
  },
  {
    "semver.beta*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)\d{4}\-\d{2}$/,
  },
  {
    "semver.beta*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)beta\d*(\.|-)\d{4}\-\d{2}$/,
  },

  //semver.alpha*.date(yyyy.mm.dd)
  {
    "semver.alpha*.date":
      /^(v|)\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\.\d{2}\.\d{2}$/,
  },
  {
    "semver.alpha*.date":
      /^(v|)\d+\.\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\.\d{2}\.\d{2}$/,
  },
  {
    "semver.alpha*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\.\d{2}\.\d{2}$/,
  },
  {
    "semver.alpha*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\.\d{2}\.\d{2}$/,
  },
  {
    "semver.alpha*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\.\d{2}\.\d{2}$/,
  },
  //semver.alpha*.date(yyyy/mm/dd)
  {
    "semver.alpha*.date":
      /^(v|)\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\/\d{2}\/\d{2}$/,
  },
  {
    "semver.alpha*.date":
      /^(v|)\d+\.\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\/\d{2}\/\d{2}$/,
  },
  {
    "semver.alpha*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\/\d{2}\/\d{2}$/,
  },
  {
    "semver.alpha*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\/\d{2}\/\d{2}$/,
  },
  {
    "semver.alpha*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\/\d{2}\/\d{2}$/,
  },
  //semver.alpha*.date(yyyy-mm-dd)
  {
    "semver.alpha*.date":
      /^(v|)\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\-\d{2}\-\d{2}$/,
  },
  {
    "semver.alpha*.date":
      /^(v|)\d+\.\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\-\d{2}\-\d{2}$/,
  },
  {
    "semver.alpha*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\-\d{2}\-\d{2}$/,
  },
  {
    "semver.alpha*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\-\d{2}\-\d{2}$/,
  },
  {
    "semver.alpha*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\-\d{2}\-\d{2}$/,
  },
  //semver.alpha*.date(yyyy.mm)
  { "semver.alpha*.date": /^(v|)\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\.\d{2}$/i },
  {
    "semver.alpha*.date": /^(v|)\d+\.\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\.\d{2}$/,
  },
  {
    "semver.alpha*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\.\d{2}$/,
  },
  {
    "semver.alpha*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\.\d{2}$/,
  },
  {
    "semver.alpha*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\.\d{2}$/,
  },
  //semver.alpha*.date(yyyy/mm)
  { "semver.alpha*.date": /^(v|)\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\/\d{2}$/i },
  {
    "semver.alpha*.date": /^(v|)\d+\.\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\/\d{2}$/,
  },
  {
    "semver.alpha*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\/\d{2}$/,
  },
  {
    "semver.alpha*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\/\d{2}$/,
  },
  {
    "semver.alpha*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\/\d{2}$/,
  },
  //semver.alpha*.date(yyyy-mm)
  { "semver.alpha*.date": /^(v|)\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\-\d{2}$/i },
  {
    "semver.alpha*.date": /^(v|)\d+\.\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\-\d{2}$/,
  },
  {
    "semver.alpha*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\-\d{2}$/,
  },
  {
    "semver.alpha*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\-\d{2}$/,
  },
  {
    "semver.alpha*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\-\d{2}$/,
  },
  { "semver.alpha*.date": /^(v|)\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\.\d{2}$/i },
  {
    "semver.alpha*.date": /^(v|)\d+\.\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\.\d{2}$/,
  },
  {
    "semver.alpha*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\.\d{2}$/,
  },
  {
    "semver.alpha*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\.\d{2}$/,
  },
  {
    "semver.alpha*.date":
      /^(v|)\d+\.\d+\.\d+\.\d+\.\d+\.\d+(\.|-)alpha\d*(\.|-)\d{4}\.\d{2}$/,
  },
  { "{version}": /^\{version\}$/i },
];
