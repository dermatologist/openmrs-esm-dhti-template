
# DHTI Conch Template

* [DHTI](https://github.com/dermatologist/dhti) Conch template
* WIP

## Running this code

```sh
yarn  # to install dependencies
yarn start  # to run the dev server
```

Once it is running, a browser window
should open with the OpenMRS 3 application. Log in and then navigate to `/openmrs/spa/root`.

## Adapting the code

1. Start by finding and replacing all instances of "template" with the name
  of your microfrontend.
2. Update `index.ts` as appropriate, at least changing the feature name and the page name and route.
3. Rename the `root.*` family of files to have the name of your first page.
4. Delete the contents of the objects in `config-schema`. Start filling them back in once you have a clear idea what will need to be configured.
5. Delete the `dhti-template` and `patient-getter` directories, and the contents of `root.component.tsx`.
6. Delete the contents of `translations/en.json`.
7. Open up `.github/workflows` and adapt it to your needs. If you're writing
 a microfrontend that will be managed by the community, you might be able to
  just replace all instances of `template` with your microfrontend's name.
  However, if you're writing a microfrontend for a specific organization or
  implementation, you will probably need to configure GitHub Actions differently.
8. Delete the contents of this README and write a short explanation of what
  you intend to build. Links to planning or design documents can be very helpful.

At this point, you should be able to write your first page as a React application.


## Integrating it into your application

Please see [Creating a Frontend Module](https://o3-docs.openmrs.org/docs/recipes/create-a-frontend-module).
