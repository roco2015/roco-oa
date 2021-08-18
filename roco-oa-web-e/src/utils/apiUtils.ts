export const getResponseData = (response) => new Promise<any>((resolve, reject) => {
  const { data } = response;
  if (data?.code === 0) {
    resolve(data.data);
  }
  reject(data);
});
