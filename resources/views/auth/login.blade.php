@extends('layout.appLayout')
@section('script')
    <script>
        window.App = {!! json_encode([
            'csrfToken'=> csrf_token(),
            'email' => old('email'),
            'formAction'=> route('login'),
            'errors'=>$errors->all(),
            'registerUrl'=>route('register')
        ]) !!};
    </script>
{{--    @dump(json_encode($errors->getMessages()))--}}
@endsection
@section('content')
    <app-login
        form-action="{{ route('login') }}"
        email="{{old('email')}}"
        token="{{csrf_token()}}">
    </app-login>

    {{--        <form method="POST" action="{{ route('login') }}">--}}
    {{--            @csrf--}}

    {{--            <div class="form-group row">--}}
    {{--                <label for="email" class="col-md-4 col-form-label text-md-right">{{ __('E-Mail Address') }}</label>--}}

    {{--                <div class="col-md-6">--}}
    {{--                    <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>--}}

    {{--                    @error('email')--}}
    {{--                    <span class="invalid-feedback" role="alert">--}}
    {{--                                            <strong>{{ $message }}</strong>--}}
    {{--                                        </span>--}}
    {{--                    @enderror--}}
    {{--                </div>--}}
    {{--            </div>--}}

    {{--            <div class="form-group row">--}}
    {{--                <label for="password" class="col-md-4 col-form-label text-md-right">{{ __('Password') }}</label>--}}

    {{--                <div class="col-md-6">--}}
    {{--                    <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">--}}

    {{--                    @error('password')--}}
    {{--                    <span class="invalid-feedback" role="alert">--}}
    {{--                                            <strong>{{ $message }}</strong>--}}
    {{--                                        </span>--}}
    {{--                    @enderror--}}
    {{--                </div>--}}
    {{--            </div>--}}

    {{--            <div class="form-group row">--}}
    {{--                <div class="col-md-6 offset-md-4">--}}
    {{--                    <div class="form-check">--}}
    {{--                        <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>--}}

    {{--                        <label class="form-check-label" for="remember">--}}
    {{--                            {{ __('Remember Me') }}--}}
    {{--                        </label>--}}
    {{--                    </div>--}}
    {{--                </div>--}}
    {{--            </div>--}}

    {{--            <div class="form-group row mb-0">--}}
    {{--                <div class="col-md-8 offset-md-4">--}}
    {{--                    <button type="submit" class="btn btn-primary">--}}
    {{--                        {{ __('Login') }}--}}
    {{--                    </button>--}}

    {{--                    @if (Route::has('password.request'))--}}
    {{--                        <a class="btn btn-link" href="{{ route('password.request') }}">--}}
    {{--                            {{ __('Forgot Your Password?') }}--}}
    {{--                        </a>--}}
    {{--                    @endif--}}
    {{--                </div>--}}
    {{--            </div>--}}
    {{--        </form>--}}

@endsection

