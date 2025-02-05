import {
  Image,
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import { useOAuth } from '@clerk/clerk-expo';
import { Ionicons } from '@expo/vector-icons';

import { Colors } from '@/constants/Colors';

const Page = () => {
  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_facebook' });
  const { startOAuthFlow: StartGoogleOAuthFlow } = useOAuth({
    strategy: 'oauth_google',
  });

  const handleFacebookLogin = async () => {
    try {
      const { createdSessionId, setActive } = await startOAuthFlow();

      console.log('Created session id : ', createdSessionId);

      if (createdSessionId) {
        setActive!({ session: createdSessionId });
      }
    } catch (error) {
      console.log('ERROR');
      console.log(error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const { createdSessionId, setActive } = await StartGoogleOAuthFlow();

      console.log('Created session id : ', createdSessionId);

      if (createdSessionId) {
        setActive!({ session: createdSessionId });
      }
    } catch (error) {
      console.log('ERROR');
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('@/assets/images/login.png')}
        style={styles.loginImage}
      />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>How would you like to use Threads?</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleFacebookLogin}
          >
            <View style={styles.loginButtonContent}>
              <Image
                source={require('@/assets/images/instagram_icon.webp')}
                style={styles.loginButtonImage}
              />
              <Text style={styles.loginButtonText}>
                Continue with Instagram
              </Text>
              <Ionicons
                name="chevron-forward"
                size={24}
                color={Colors.border}
              />
            </View>
            <Text style={styles.loginButtonSubtitle}>
              Log in or create a THreads profile with your Instagram account.
              With a profile, you can post, interact and get personalised
              recommendations.
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleGoogleLogin}
          >
            <View style={styles.loginButtonContent}>
              <Text style={styles.loginButtonText}>Continue with Google</Text>
              <Ionicons
                name="chevron-forward"
                size={24}
                color={Colors.border}
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.loginButton}>
            <View style={styles.loginButtonContent}>
              <Text style={styles.loginButtonText}>Use without a profile</Text>
              <Ionicons
                name="chevron-forward"
                size={24}
                color={Colors.border}
              />
            </View>
            <Text style={styles.loginButtonSubtitle}>
              You can browse Threads without a profile, but won't be able to
              post, interact or get personalised recommendations.
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.switchAccountButtonText}>Switch accounts</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    alignItems: 'center',
    backgroundColor: Colors.background,
  },

  scrollContainer: {
    gap: 20,
    paddingBottom: 25,
    alignItems: 'center',
    backgroundColor: Colors.background,
  },

  loginImage: {
    height: 350,
    width: '100%',
    resizeMode: 'cover',
  },

  title: {
    fontSize: 17,
    fontFamily: 'DMSans_500Medium',
  },

  buttonContainer: {
    gap: 20,
    marginHorizontal: 20,
  },

  loginButton: {
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderColor: Colors.border,
    borderWidth: StyleSheet.hairlineWidth,
  },

  loginButtonText: {
    flex: 1,
    fontSize: 15,
    color: '#000',
    fontFamily: 'DMSans_500Medium',
  },

  loginButtonContent: {
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },

  loginButtonImage: {
    width: 50,
    height: 50,
  },

  loginButtonSubtitle: {
    fontSize: 12,
    marginTop: 5,
    color: '#acacac',
    fontFamily: 'DMSans_400Regular',
  },

  switchAccountButtonText: {
    fontSize: 14,
    alignSelf: 'center',
    color: Colors.border,
  },
});
